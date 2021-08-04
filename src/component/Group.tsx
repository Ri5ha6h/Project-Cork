import React, { FC, memo } from "react";

interface Props {
  groupName?: string;
  image?: string;
  first_name?: string;
}

const Group: FC<Props> = ({ groupName, image, first_name }) => {
  return (
    <div className="flex items-center w-full h-24 mx-4 mt-6 border border-black">
      <div>
        <img className="w-8 h-8 rounded-full" src={image} alt="groupImage" />
      </div>
      <div>
        <h3 className="text-blue-500">{first_name}</h3>
        <span className="text-green-500">{groupName}</span>
      </div>
    </div>
  );
};

Group.defaultProps = {};

export default memo(Group);
