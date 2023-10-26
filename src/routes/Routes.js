import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const LandingPage = lazy(() => import('../pages/LandingPage/LandingPage'));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
