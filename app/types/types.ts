import { ObjectId } from "mongodb";

export interface Movie {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface SessionData {
  userId?: string;
  username?: string;
  email?: string;
  img?: string;
  isPro?: boolean;
  isLoggedIn: boolean;
}

export interface User {
  id: string | ObjectId;
  username: string;
  email: string;
  img: string;
  isPro?: boolean;
  bookmarks: Movie[];
}
