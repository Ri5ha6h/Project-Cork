import React from 'react';
import { FC, memo } from 'react';
import { meSelector } from '../../selectors/auth.selectors';
import { firstNameSelector } from '../../selectors/users.selectors';
import { useAppSelector } from '../../store';

interface Props {}

const Dashboard: FC<Props> = (props) => {
  // const user = useAppSelector(meSelector);
  const firstName = useAppSelector(
    firstNameSelector
  );
  return (
    <div className='mt-26.6 p-10 w-screen h-screen bg-accent bg-opacity-20'>
      <div className='text-right text-red-500'>
        Welcome, {firstName}
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
