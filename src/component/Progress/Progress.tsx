import React from 'react';
import { FC, memo } from 'react';

interface Props {
  width?: number;
}

const Progress: FC<Props> = ({ width }) => {
  return (
    <div className='relative w-1/2 h-4 border rounded-full'>
      {/* <div className={`bg-blue-500 w-${width}`}></div> */}
      <div
        className={`absolute w-${width}/5 h-4 bg-blue-500 rounded-full`}
      ></div>
    </div>
  );
};

Progress.defaultProps = {};

export default memo(Progress);
