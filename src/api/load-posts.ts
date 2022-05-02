import { request } from 'graphql-request';
import { Settings } from '../shared-types/settings';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostsMetadata } from '../shared-types/postAttributes';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: Settings;
  posts: PostsMetadata;
  variables?: LoadPostsVariables;
};

export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 9,
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables,
  });

  return data;
};
