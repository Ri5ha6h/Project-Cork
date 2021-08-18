import React, {
  FC,
  Suspense,
  useEffect,
} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { authActions } from './actions/auth.actions';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import AppComponentPageLazy from './page/AppContainer/AppContainer.lazy';
import AuthPageLazy from './page/Auth/Auth.lazy';
import NotFound from './page/NotFound';
import { meSelector } from './selectors/auth.selectors';
import { useAppSelector } from './store';

interface Props {}

const App: FC<Props> = () => {
  const user = useAppSelector(meSelector);

  const token = localStorage.getItem(
    LS_AUTH_TOKEN
  );

  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => authActions.fetched(u));
  }, []);

  if (!user && token) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Suspense
        fallback={
          <div className='tracking-widest text-green-600'>
            Loading...
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              {user ? (
                <Redirect to='/dashboard' />
              ) : (
                <Redirect to='/login' />
              )}
            </Route>
            <Route
              path={['/login', '/signup']}
              exact
            >
              {user ? (
                <Redirect to='/dashboard' />
              ) : (
                <AuthPageLazy />
              )}
            </Route>
            <Route
              path={[
                '/dashboard',
                '/profile',
                '/groups',
                '/batch/:batchNum/lecture/:lectureNum',
              ]}
              exact
            >
              {user ? (
                <AppComponentPageLazy />
              ) : (
                <Redirect to='/login' />
              )}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
