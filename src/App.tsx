import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppComponentPage from './page/AppComponent.page';
import AuthPage from './page/Auth.page';
import NotFound from './page/NotFound';


function App() {
 

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path={['/login', '/signup']} exact>
        <AuthPage />
      </Route>
      <Route
        path={[
          '/dashboard',
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
  )
}

export default App
