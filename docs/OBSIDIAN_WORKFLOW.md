# Obsidian Publishing Workflow

This site reads Markdown from `content/`. You can write in Obsidian first, then publish finished pieces by moving them into the content folders.

## Suggested Folders

- `Inbox/`: loose ideas that may never be public
- `Notes/`: long-term notes and thinking drafts
- `Drafts/`: posts that are starting to become publishable
- `Journal/`: private daily notes
- `content/posts/`: public Blog posts
- `content/talks/`: public Talk and Now archive entries
- `content/library/`: Library cards and review pages
- `content/templates/`: reusable Markdown templates

The `.obsidian/` folder is ignored by git, so local editor settings do not affect deployment.

## Publishing A Blog Post

1. Start a rough note in `Inbox/` or `Drafts/`.
2. Copy `content/templates/blog-draft-template.md`.
3. Fill in `title`, `date`, `desc`, and `tags`.
4. Move the finished file into `content/posts/`.
5. Change `status: draft` to `status: published`.
6. Run `npm run lint` and `npm run build`.

Minimum frontmatter:

```yaml
---
title: "Post title"
date: "2026-01-01"
desc: "One sentence summary."
tags:
  - "#blog"
  - "#web"
relatedTalks: []
ogImage: ""
status: draft
---
```

Draft and private posts are excluded from public pages:

```yaml
status: draft
status: private
```

## Publishing A Short Update

Short updates live in `content/talks/` and appear in the Activity timeline and Now page.

```yaml
---
title: "Short update title"
date: "2026-01-02"
subtitle: "Optional one-line subtitle"
event: "Personal Website"
tags:
  - "#log"
relatedPosts: []
status: published
---
```

## Publishing A Library Entry

Copy `content/templates/library-template.md` into `content/library/`.

If the file only has frontmatter, it appears as a collection card. If it has Markdown body content, it also becomes a review page.

Useful fields:

- `category`: `anime`, `movie`, `artist`, or `game`
- `status`: `watched`, `listened`, `watching`, `playing`, `played`, `planned`, or `recommended`
- `recommendation`: `brilliant`, `favorite`, `recommended`, or `casual`
- `rating`: number from `0` to `10`, or `null`
- `featured`: show the item in curated highlights
- `featuredOrder`: lower numbers appear first

## Related Content

Posts can manually link related Talk entries:

```yaml
relatedTalks:
  - "site-launch"
```

Talk entries can manually link related posts:

```yaml
relatedPosts:
  - "welcome"
```

If you do not fill these fields, the site still uses simple title, tag, and content matching for related content.

## Open Graph Images

Generated preview images live in `public/og/`. Run:

```bash
npm run og
```

Custom preview images can be set per post:

```yaml
ogImage: "/og/my-custom-image.png"
```

## Tags

Tags are collected by Search and tag archive pages.

```yaml
tags:
  - "#blog"
  - "#web"
  - "#personal-site"
```

For each published item, use:

- one content type tag, such as `#blog`, `#notes`, or `#talk`
- one to three topic tags, such as `#web`, `#music`, or `#game`

## Now Page

The Now page is generated automatically from recent posts, Talk entries, Library reviews, and projects. You do not need to maintain a separate status page.

## Suggested Rhythm

1. Save rough thoughts in `Inbox/`.
2. Refine useful ideas in `Notes/`.
3. Move stronger drafts into `Drafts/`.
4. Publish finished writing into `content/posts/`.
5. Publish small updates into `content/talks/`.
6. Keep Library entries in `content/library/`.
