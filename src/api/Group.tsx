import React, { FC, memo } from 'react';

interface Props {
  groupName?: string;
  image?: string;
  userName?: string;
}

const Group: FC<Props> = ({ groupName, image, userName }) => {
  return (
    <div className="flex items-center justify-between w-full h-24 mt-6 ml-4 border border-black">
      <div>
        <img className="w-8 h-8 rounded-full" src={image} alt="groupImage" />
      </div>
      <div>
        <h3 className="text-blue-500">{userName}</h3>
        <span className="text-green-500">{groupName}</span>
      </div>
    </div>
  );
};

Group.defaultProps = {};

export default memo(Group);