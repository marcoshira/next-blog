import { Post } from '../../components/Post';
import { PostMetadata } from '../../shared-types/postAttributes';
import { BaseTemplate } from '../Base';
import { Settings } from '../../shared-types/settings';
import { Comments } from '../../components/Comments';

export type PostTemplateProps = {
  settings: Settings;
  post: PostMetadata;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings} showSearch={false}>
      <Post {...post} />
      <Comments
        allowComments={post.attributes.allowComments}
        id={post.id}
        title={post.attributes.title}
        slug={post.attributes.slug}
      />
    </BaseTemplate>
  );
};
