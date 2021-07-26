import React from 'react';
import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthHero from '../component/AuthHero';
import LoginPage from './Login.page';
import SignupPage from './Signup.page';

interface Props {}

const AuthPage: FC<Props> = (props) => {
  return (
    <Switch>
      <div className="relative flex justify-between h-screen font-nunito">
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <AuthHero />
      </div>
    </Switch>
  );
};

AuthPage.defaultProps = {};

export default memo(AuthPage);
