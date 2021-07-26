import React from 'react';
import { FC, memo } from 'react';

interface Props {}

const NotFound: FC<Props> = (props) => {
  return <div className="bg-blue-400"> page not found</div>;
};

NotFound.defaultProps = {};

export default memo(NotFound);
