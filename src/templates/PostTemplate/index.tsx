import { Post } from '../../components/Post';
import { PostMetadata } from '../../shared-types/postAttributes';
import { BaseTemplate } from '../Base';
import { Settings } from '../../shared-types/settings';

export type PostTemplateProps = {
  settings: Settings;
  post: PostMetadata;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings} showSearch={false}>
      <Post {...post} />
    </BaseTemplate>
  );
};
