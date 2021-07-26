import React from 'react';
import Progress from './Progress';

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    width: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
    },
  },
};

export const Main = (args: any) => <Progress {...args} />;
