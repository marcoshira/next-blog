import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuLink, MenuLinkProps } from '.';
import { theme } from '../../styles/theme';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
    newTab: true,
  },
  argTypes: {
    children: { type: 'string' },
    newTab: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Template: Story<MenuLinkProps> = (args) => {
  return (
    <div
      style={{
        maxWidth: '320px',
        background: theme.colors.black,
        padding: theme.spacings.large,
      }}
    >
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
    </div>
  );
};
