import { Menu } from '@headlessui/react';
import React from 'react';
import { FC, memo } from 'react';
import { FiMail, FiSearch } from 'react-icons/fi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { logout } from '../api/Api';
import logo from '../images/logo.svg';
import profile from '../images/profile.jpg';
import Button from './Button/Buttons';

interface Props {}

const Header: FC<Props> = (props) => {
  return (
    <div className="w-screen px-10 py-2 bg-secondary h-13.3 fixed top-0 z-20">
      <div className="flex justify-between">
        <div className="flex">
          <ul className="flex">
            <li>
              <Link to="/dashboard">
                <img className="w-8.5 h-8.5" src={logo} alt="cork logo" />
              </Link>
            </li>
            <li className="hidden ml-3 lg:block">
              <Link to="/dashboard">
                <h1 className="text-2xl font-bold tracking-wider text-logo font-logo">
                  CORK
                </h1>
              </Link>
            </li>
          </ul>
          <ul className="items-center justify-center hidden lg:flex ml-14">
            <li>
              <form className="w-92.5">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pr-1 text-sm font-semibold tracking-widest border rounded-md border-search placeholder-accent text-accent bg-search focus:outline-none focus:border-accent pl-9 h-9 focus:placeholder-opacity-20 "
                    placeholder="Search..."
                  />
                  <FiSearch className="absolute w-5 h-5 top-2 left-2 text-accent" />
                </div>
              </form>
            </li>
          </ul>
        </div>
        <div>
          <ul className="relative flex items-center justify-center space-x-10">
            <li>
              <FiSearch className="absolute w-6 h-6 lg:hidden top-2 text-logo" />
            </li>

            <li>
              <Link to="/dashboard">
                <FiMail className="absolute w-6 h-6 top-2 text-logo" />
              </Link>
            </li>

            <li>
              <Link to="/dashboard">
                <IoNotificationsOutline className="absolute w-6 h-6 top-2 text-logo" />
              </Link>
            </li>
            <li className="">
              <Menu>
                <Menu.Button>
                  <img
                    className="mt-1 rounded-md w-7 h-7"
                    src={profile}
                    alt="profile"
                  />
                </Menu.Button>
                <Menu.Items className="absolute right-0 flex flex-col items-center w-40 h-32 bg-gray-200 rounded-md">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={`${
                          active && 'text-blue-500'
                        } mt-1 w-full text-center py-4`}
                      >
                        profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active && 'text-blue-500'
                        } mt-1 w-full py-4`}
                        onClick={() => {
                          logout();
                          window.location.href = '/login';
                        }}
                      >
                        Log Out
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default memo(Header);
