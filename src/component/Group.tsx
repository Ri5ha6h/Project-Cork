import React, { FC, memo } from 'react';

interface Props {
  groupName?: string;
  image?: string;
  first_name?: string;
}

const Group: FC<Props> = ({
  groupName,
  image,
  first_name,
}) => {
  return (
    <div className='flex items-center w-full h-24 mt-6 border rounded-md border-accent'>
      <div className='w-1/4 h-full p-6'>
        <img
          className='w-10 h-10 rounded-md'
          src={image}
          alt='groupImage'
        />
      </div>
      <div className='w-3/4 h-full p-6'>
        <h3 className='text-blue-500'>
          {first_name}
        </h3>
        <span className='text-green-500'>
          {groupName}
        </span>
        
      </div>
    </div>
  );
};

Group.defaultProps = {};

export default memo(Group);
