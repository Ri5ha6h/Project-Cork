import React from 'react';
import { FC, memo } from 'react';

interface Props {}

const SideBar: FC<Props> = (props) => {
  return (
    <div className="w-56 h-screen text-white duration-500 ease-in-out transform -translate-x-full  bg-accent bg-opacity-15 md:-translate-x-0">
      {' '}
      Sidebar
    </div>
  );
};

SideBar.defaultProps = {};

export default memo(SideBar);
