import { IAuthor } from "./Author";

export interface ICourse {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: string;
  authors: IAuthor[];
  length: number;
}
