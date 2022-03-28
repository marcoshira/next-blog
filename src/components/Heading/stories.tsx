import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto',
  },
  argTypes: {
    children: { type: 'string' },
    size: {
      options: ['small', 'medium', 'big', 'huge'],
      control: { type: 'radio' },
    },
    uppercase: { type: 'boolean' },
  },
} as Meta;

export const Template: Story<HeadingProps> = (args) => <Heading {...args} />;
