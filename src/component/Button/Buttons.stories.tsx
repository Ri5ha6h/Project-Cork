import React from 'react';
import Button from './Buttons';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    look: {
      options: ['solid', 'outline'],
      control: { type: 'radio' },
    },
  },
};

export const Main = (args: any) => (
  <Button disabled={true} children='login' {...args} />
);
