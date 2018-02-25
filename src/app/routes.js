import React from 'react';
import { Router, Switch, Route } from 'react-router';
import history from './history';
import App from './containers/Installer/App';
import {render} from 'react-dom';
import { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import installerPage from './reducers';

let store = createStore(installerPage)

const AppRoutes = React.createClass({
  render: function() {
    return (
       <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/*" component={App} />
          </Switch>
        </Router>
      </Provider>
    );
  }
});

export default AppRoutes;
