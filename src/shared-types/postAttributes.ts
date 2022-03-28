import { Author } from './author';
import { Category } from './category';
import { Tag } from './tag';

export type PostMetadata = {
  id: string;
  attributes: PostAttributes;
};

export type PostAttributes = {
  title: string;
  slug: string;
  excerpt: string;
  allowComments: boolean;
  createdAt: string;
  updatedAt: string;
  author: Author;
  tags: Tag;
  categories: Category;
  cover: MetadataImage;
  content: string;
};

export type MetadataImage = {
  data: DataImage;
};

export type DataImage = {
  id: string;
  attributes: AttributesImage;
};

export type AttributesImage = {
  url: string;
  alternativeText: string;
};
