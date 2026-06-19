import { parse as parseYaml } from "yaml";

type FrontmatterResult = {
  data: Record<string, unknown>;
  content: string;
};

const frontmatterPattern = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export function parseFrontmatter(source: string): FrontmatterResult {
  const match = source.match(frontmatterPattern);

  if (!match) {
    return { data: {}, content: source };
  }

  const parsed = parseYaml(match[1]) ?? {};
  const data =
    parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : {};

  return {
    data,
    content: source.slice(match[0].length),
  };
}
