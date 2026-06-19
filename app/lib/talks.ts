import fs from 'fs';
import path from 'path';
import { Talk } from '../types';
import { withBasePath } from './base-path';
import { parseFrontmatter } from './frontmatter';

const talksDirectory = path.join(process.cwd(), 'content/talks');

function isPublicStatus(value: unknown) {
  if (typeof value !== 'string') return true;
  const status = value.trim().toLowerCase();
  return status !== 'draft' && status !== 'private';
}

function normalizeTag(tag: unknown) {
  if (typeof tag !== 'string') return '';
  const value = tag.trim().replace(/^#+/, '');
  return value ? `#${value}` : '';
}

function normalizeTags(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.map(normalizeTag).filter(Boolean);
}

function extractSubtitleDirective(content: string) {
  const subtitlePattern = /(^|\n):::\s*subtitle\s*\n([\s\S]*?)\n:::\s*(?=\n|$)/;
  const match = content.match(subtitlePattern);

  if (!match) {
    return { subtitle: '', content };
  }

  const before = content.slice(0, match.index);
  const after = content.slice((match.index ?? 0) + match[0].length);

  return {
    subtitle: match[2].trim(),
    content: `${before}${match[1] ?? ''}${after}`.replace(/^\n+/, '').trimStart(),
  };
}

export function getSortedTalksData(): Talk[] {
  // Return an empty array if the folder does not exist.
  if (!fs.existsSync(talksDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(talksDirectory);
  const allTalksData = fileNames.map((fileName) => {
    // Remove the .md extension for the id.
    const id = fileName.replace(/\.md$/, '');

    // Read the markdown file.
    const fullPath = path.join(talksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse YAML frontmatter metadata.
    const { data, content } = parseFrontmatter(fileContents);
    const { subtitle, content: bodyContent } = extractSubtitleDirective(content);

    // Handle Obsidian-style banner image links.
    let banner: string | undefined;
    if (data.banner) {
      // Ensure banner is a string.
      const bannerStr = String(data.banner);
      const match = bannerStr.match(/^\[\[(.*?)\]\]$/);
      if (match) {
        banner = withBasePath(`/images/${match[1]}`);
      } else if (!bannerStr.startsWith('/')) {
        banner = withBasePath(`/images/${bannerStr}`);
      } else {
        banner = withBasePath(bannerStr);
      }
    }

    // Normalize date format.
    let dateStr = '';
    if (data.date) {
      if (data.date instanceof Date) {
        const d = data.date;
        dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      } else {
        // Try to handle long date strings or regular strings.
        const str = String(data.date);
        // Check for formats like "Mon Feb 23 2026...".
        if (str.includes('GMT') || str.match(/^[A-Z][a-z]{2}\s[A-Z][a-z]{2}\s\d{2}\s\d{4}/)) {
           const d = new Date(str);
           if (!isNaN(d.getTime())) {
             dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
           } else {
             dateStr = str; // Keep the original value if parsing fails.
           }
        } else {
           dateStr = str;
        }
      }
    }

    return {
      id,
      desc: bodyContent, // Use body content as the description.
      subtitle,
      year: dateStr ? dateStr.split('-')[0] : 'Unknown', // Automatically extract the year from the date.
      ...(data as Omit<Talk, 'id' | 'desc' | 'year' | 'date' | 'banner'>),
      tags: normalizeTags(data.tags),
      date: dateStr,
      banner,
    };
  }).filter((talk) => isPublicStatus(talk.status));

  // Sort by date. (newest first)
  return allTalksData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
