export type LibraryCategory = "anime" | "movie" | "artist" | "game";

export type LibraryStatus =
  | "watched"
  | "listened"
  | "watching"
  | "playing"
  | "played"
  | "planned"
  | "recommended";

export type LibraryRecommendation =
  | "brilliant"
  | "favorite"
  | "recommended"
  | "casual";

export type LibraryImage = {
  src: string;
  alt: string;
  credit: string;
  source: string;
  fit?: "cover" | "contain";
};

export type LibraryRecommendedWork = {
  title: string;
  image?: string;
  link?: string;
  source?: string;
  note?: string;
};

export type LibraryItem = {
  id: string;
  slug: string;
  sourceFile: string;
  title: string;
  subtitle?: string;
  category: LibraryCategory;
  year?: string;
  date: string;
  status: LibraryStatus;
  recommendation: LibraryRecommendation;
  rating: number | null; // Personal score from 0 to 10, or null when unrated.
  featured: boolean;
  featuredOrder?: number;
  tags: string[];
  note: string;
  link?: string;
  recommendedWorks: LibraryRecommendedWork[];
  image: LibraryImage;
  content?: string;
  hasReview: boolean;
  statusVisibility?: string;
};

export type LibraryCategoryInfo = {
  id: LibraryCategory;
  label: string;
  title: string;
  description: string;
  href: string;
};

export const libraryCategories: LibraryCategoryInfo[] = [
  {
    id: "anime",
    label: "Anime",
    title: "Anime Collection",
    description: "Anime I watched, plan to watch, or want to recommend.",
    href: "/library/anime",
  },
  {
    id: "movie",
    label: "Movie",
    title: "Movie Collection",
    description: "Movies with memorable images, music, or feelings.",
    href: "/library/movie",
  },
  {
    id: "artist",
    label: "Artist",
    title: "Artist Collection",
    description: "Artists, bands, composers, and works worth recommending.",
    href: "/library/artist",
  },
  {
    id: "game",
    label: "Game",
    title: "Game Collection",
    description: "Games I played, plan to try, or want to write about.",
    href: "/library/game",
  },
];
