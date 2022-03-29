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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        quis fugit. Cupiditate recusandae esse reiciendis nihil nam, asperiores
        amet possimus neque in voluptatum expedita officia voluptas rerum
        laborum nobis dolor.
      </p>
    </div>
  );
};
