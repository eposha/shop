import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import ErrorPage from './components/ErrorPage/ErrorPage';

import './global.module.scss';
import styles from './App.module.scss';

const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Router>
          <Switch>
            <Route exact path={'/'} component={Main} />
            <Route path={'/error'} component={ErrorPage} />
            <Route component={() => <ErrorPage notFound />} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
