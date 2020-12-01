
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ReactNotifications from 'react-notifications-component';

import Homepage from './components/home';

import ProtectedRoute from './routes/ProtectedRoute';
import AdminPortal from './components/AdminPortal';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div>
        <ReactNotifications />
        <Switch>
          <Route path="/" exact component={Homepage} />

          <ProtectedRoute path="/admin-portal/" component={AdminPortal} />
          <Route render={() => <h1>Error 404. Page not found.</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
