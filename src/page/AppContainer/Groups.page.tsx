import React from 'react';
import { FC, memo } from 'react';
import Group from '../../component/Group';
import profile from '../../images/profile.jpg';
import { groupsLoadingSelector, groupQuerySelector } from '../../selectors/constants.selectors';
import { currentGroupsSelector } from '../../selectors/groups.selectors';
import { useAppSelector } from '../../store';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { queryChangedAction } from '../../actions/groups.actions';

interface Props {}

const Groups: FC<Props> = (props) => {
  const query = useAppSelector(
    groupQuerySelector
  );

  const groups = useAppSelector(currentGroupsSelector);

  const loading = useAppSelector(groupsLoadingSelector);

  const dispatch = useDispatch();

  return (
    <>
      <div className='mt-26.6 p-10 w-screen h-screen bg-accent bg-opacity-20'>
        <div className=''>
          <input
            className='ml-5 border-b border-blue-500 w-52 focus:outline-none'
            type='text'
            placeholder='search'
            value={query}
            onChange={(e) => {
            //  groupsActions.queryChanged(e.target.value);
            dispatch(queryChangedAction(e.target.value));
            }}
          />
          {loading && <FaSpinner className='w-4 h-4 animate-spin'></FaSpinner>}
        </div>

        <div className='grid grid-cols-2 gap-x-4'>
          {groups.map((u) => (
            <Group
              key={u.id}
              groupName={u.name}
              image={profile}
              first_name={u.creator?.first_name}
            />
          ))}
          {!loading && groups.length === 0 && "No data against this query"}
        </div>
      </div>
    </>
  );
};

Groups.defaultProps = {};

export default memo(Groups);
