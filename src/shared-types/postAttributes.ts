import { PostCardProps } from '../components/PostCard';
import { Author } from './author';
import { Category } from './category';
import { Tag } from './tag';

export type PostsProps = {
  posts: PostsMetadata;
};

export type PostsMetadata = {
  data: PostMetadata[];
};

export type PostMetadata = {
  id: string;
  attributes: PostAttributes;
};

export type PostAttributes = PostCardProps & {
  // title: string;
  // slug: string;
  // excerpt: string;
  // cover: MetadataImage;
  allowComments: boolean;
  createdAt: string;
  updatedAt: string;
  author: Author;
  tags: Tag;
  categories: Category;
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
