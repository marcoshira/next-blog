import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings,
} from '../../api/load-posts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function SearchPage({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Search: {router.query.q} - {setting.data.attributes.blogName}
        </title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  StrapiPostAndSettings
> = async (ctx) => {
  let data = null;
  const query = ctx.query.q || '';
  const variables = { postSearch: query as string };

  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: { ...defaultLoadPostsVariables, ...variables },
    },
  };
};
