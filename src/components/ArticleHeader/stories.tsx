import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock.attributes,
  argTypes: {
    title: {
      type: 'string',
    },
    excerpt: {
      type: 'string',
    },
    createdAt: {
      control: {
        type: 'date',
      },
    },
    updatedAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
    </div>
  );
};
