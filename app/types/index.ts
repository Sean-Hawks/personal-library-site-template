export type RoleTag = {
  label: string;
  color: string;
};

export interface Post {
  date: string;
  title: string;
  desc: string;
  slug: string;
  sourceFile?: string;
  status?: string;
  tags: string[];
  relatedTalks?: string[];
  ogImage?: string;
  content?: string; // Full post content, HTML or Markdown.
  banner?: string; // Optional post banner image path, such as "/images/banner.svg".
}

export interface Talk {
  id: string;      // File name slug.
  title: string;
  date: string;
  year: string;    // Generated from date.
  event?: string;  // Optional field.
  status?: string;
  desc: string;    // Markdown body content.
  subtitle?: string;
  tags?: string[];
  slides?: string;
  video?: string;
  banner?: string; // Optional Talk banner image path.
  relatedPosts?: string[];
  ogImage?: string;
}
