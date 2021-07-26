import React from 'react';
import { FC, memo } from 'react';
import shield from '../images/shield.webp';

interface Props {}

const AuthHero: FC<Props> = (props) => {
  return (
    <div className="items-center justify-center flex-1 hidden h-screen bg-gray-900 bg-cover lg:flex">
      <img
        className="object-cover w-2/3 h-3/3"
        src={shield}
        alt="shield logo"
      />
    </div>
  );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);
