import React from 'react';
import { FC, memo } from 'react';

interface Props {}

const SideBar: FC<Props> = (props) => {
  return (
    <div className="absolute w-56 h-screen text-white bg-accent bg-opacity-15 top-26.6 transform ease-in-out duration-500 -translate-x-full md:-translate-x-0 ">
      {' '}
      Sidebar
    </div>
  );
};

SideBar.defaultProps = {};

export default memo(SideBar);
