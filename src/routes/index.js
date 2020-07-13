import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />

      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
