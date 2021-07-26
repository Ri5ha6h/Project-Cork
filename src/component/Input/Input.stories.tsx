import Input from './Input.field';
import { FiLock, FiUser } from 'react-icons/fi';
import React from 'react';

const icons = { FiLock, FiUser };

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          FiLock: 'lock',
          FiUser: 'user',
        },
      },
    },
  },
};

export const Main = (args: any) => <Input {...args} />;

Main.args = {
  touched: false,
  errors: '',
  placeholder: '',
  className: 'pl-10',
};
