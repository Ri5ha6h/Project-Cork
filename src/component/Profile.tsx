import React, { FC, memo } from "react";
import profile from "../images/profile.jpg";
import InputField from "./Input/Input.field";

interface Props {}
const Profile: FC<Props> = (props) => {
  return (
    <div className=" w-screen h-screen bg-accent bg-opacity-20 p-10 mt-26.6">
      <div className="w-full h-auto p-8 bg-white rounded-md">
        <h3 className="uppercase">general information</h3>
        <div className="flex">
          <div className="flex flex-col justify-center w-1/3 pl-10">
            <img
              className="w-24 h-24 rounded"
              src={profile}
              alt="profileImage"
            />
            <a href="#" className="mt-4 cursor-pointer">
              Upload Picture
            </a>
          </div>
          <div className="w-2/3">
            <form className="">
              <div className="flex flex-col">
                <label htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  placeholder="Full Name"
                  className="w-1/2 px-3 py-2 mt-2 bg-gray-300 rounded-md focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="dob">Date of birth</label>
                <input
                  type="date"
                  id="dob"
                  placeholder="date of birth"
                  className="w-1/2 px-3 mt-2 bg-gray-300 rounded-md py focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  placeholder="description"
                  className="w-4/5 px-3 py-2 mt-2 bg-gray-300 rounded-md focus:outline-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {};
export default memo(Profile);
