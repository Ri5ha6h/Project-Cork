import React, { forwardRef } from 'react';
import { FC, memo } from 'react';

interface Props {}

const SideBar: FC<Props> = (props) => {
  return (
    <div className='w-56 h-screen mt-26.6 p-10 text-white bg-accent'>
      {' '}
      Sidebar
    </div>
  );
};

SideBar.defaultProps = {};

export default memo(SideBar);
