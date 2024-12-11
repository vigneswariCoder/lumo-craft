export interface Game {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  banner: string;
  rating: number;
  genres: string[];
  players: string;
  achievements: number;
  platform: string;
}