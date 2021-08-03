import React, { FC, memo } from 'react';
import profile from '../images/profile.jpg';
import InputField from './Input/Input.field';

interface Props {}
const Profile: FC<Props> = (props) => {
  return (
    <div className="absolute w-96 mt-5 md:left-58 top-26.6">
      <div className="w-full bg-green-600 h-60">
        <h3 className="uppercase">general information</h3>
        <div className="flex">
          <div>
            <img className="w-24 h-24" src={profile} alt="profileImage" />
            <a href="#">Upload Picture</a>
          </div>
          <div>
            <form>
              <InputField
                labelContent="Full Name"
                placeholder="Full Name"
                inputName="fullName"
                className=""
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {};
export default memo(Profile);
