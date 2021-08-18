import React from 'react';
import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import SideBar from '../../component/SideBar';
import DashboardPage from './Dashboard.page';
import LecturePage from './Lecture.page';
import RecordingsPage from './Groups.page';
import Profile from '../../component/Profile';

interface Props {
  
}

const AppComponent: FC<Props> = (props) => {
  return (
    <Switch>
      <div className='relative flex h-screen font-nunito '>
        <Header />
        <Navbar />
        {/* <SideBar /> */}
        {/* <div className="flex"> */}
        <Route path='/dashboard'>
          <DashboardPage />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/groups'>
          <RecordingsPage />
        </Route>
        <Route path='/batch/:batchNum/lecture/:lectureNum'>
          <LecturePage />
        </Route>
        {/* </div> */}
      </div>
    </Switch>
  );
};

AppComponent.defaultProps = {};

export default memo(AppComponent);
