import React, { useEffect, useState } from 'react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { fetchGroups } from '../api/Api';
import Group from '../api/Group';
import Buttons from '../component/Button/Buttons';
import profile from '../images/profile.jpg';

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [groups, setGroups] = useState<any>([]);
  const [query, setQuery] = useState('');
  const [btnsrch, setBtnsrch] = useState('');

  useEffect(() => {
    fetchGroups({ status: 'all-groups', query }).then((data) => {
      setGroups(data);
    });
  }, [query]);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };
  const handleClick = () => {
    setQuery(btnsrch);
  };
  return (
    <>
      <div className="absolute h-screen mt-5 md:left-58 top-26.6">
        <div className="">
          <input
            className="ml-5 border-b border-blue-500 w-52 focus:outline-none"
            type="text"
            placeholder="search"
            // value={query}
            onChange={handleChange}
          />
          <input
            className="ml-5 border-b border-blue-500 w-52 focus:outline-none"
            type="text"
            placeholder="search"
            // value={btnsrch}
            onChange={(e) => setBtnsrch(e.target.value)}
          />
          <Buttons
            theme="primary"
            look="solid"
            className="ml-4"
            children="search"
            onClick={handleClick}
          />
        </div>

        {groups.map((u: any) => (
          <Group
            key={u.id}
            groupName={u.name}
            image={profile}
            userName={u.creator.first_name}
          />
        ))}
      </div>
    </>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
