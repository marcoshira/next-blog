import { Meta, Story } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from '.';
import mock from '../LogoLink/mock';

const blogName = 'Meu blog';

export default {
  title: 'Header',
  component: Header,
  args: {
    blogName: blogName,
    blogDescription: 'A descrição do meu blog.',
    srcImg: mock.srcImg,
    link: mock.link,
    newTab: mock.newTab,
  },
  argTypes: {
    blogName: { type: 'string' },
    blogDescription: { type: 'string' },
    srcImg: { type: 'string' },
    link: { type: 'string' },
    showText: { type: 'boolean' },
    newTab: { type: 'boolean' },
  },
} as Meta<HeaderProps>;

export const Template: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};
