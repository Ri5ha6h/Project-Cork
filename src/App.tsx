import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LS_LOGIN_TOKEN } from './api/Api';
import AppComponentPage from './page/AppComponent.page';
import AuthPage from './page/Auth.page';
import NotFound from './page/NotFound';

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={['/login', '/signup']} exact>
          <AuthPage />
        </Route>
        <Route
          path={[
            '/dashboard',
            '/profile',
            '/recordings',
            '/batch/:batchNum/lecture/:lectureNum',
          ]}
          exact
        >
          <AppComponentPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
