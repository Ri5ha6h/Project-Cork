import { FC, Fragment, memo, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import React from "react";
import SideBar from "./SideBar";

interface Props {}

const Navbar: FC<Props> = (props) => {
  const [isShow, setIsShow] = useState(true);
  console.log("current state", isShow);

  return (
    <>
      <div className="w-screen px-12 py-2 bg-gray-100 h-13.3 fixed top-13.3 z-10">
        <div className="flex justify-between">
          <div>
            <FiMenu
              className="w-6 h-6 mt-2 cursor-pointer text-dropdown"
              onClick={() => {
                setIsShow((show) => !show);
                console.log("after on click called", isShow);
              }}
            />
          </div>
          <div className="relative mt-1.5">
            <Link
              to="/settings"
              className="py-2 pl-4 text-sm bg-white border border-gray-300 rounded-md pr-9 text-setting "
            >
              <span className="">Settings</span>
              <BiChevronDown className="absolute right-2 top-1.5" />
            </Link>
          </div>
        </div>
      </div>
      <Transition
        show={isShow}
        as={Fragment}
        enter="transition-transform transform duration-500"
        enterFrom="-translate-x-full"
        enterTo="-translate-x-0"
        entered="-translate-x-0"
        leave="transition-transform transform duration-500"
        leaveFrom="-translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="w-56 h-screen mt-26.6 p-10 text-white bg-accent">
          {" "}
          Sidebar
        </div>
      </Transition>
    </>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
