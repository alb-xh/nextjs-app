import { Image } from './image.type';

export type Post = {
  id: number,
  title: string,
  description?: string,
  image?: Image,
};
