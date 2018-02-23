import React from 'react';
import { Router, Switch, Route } from 'react-router';
import history from './history';
import Installer from './containers/Installer';
import {render} from 'react-dom';
import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const AppRoutes = React.createClass({
  render: function() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/*" component={Installer} />
        </Switch>
      </Router>
    );
  }
});

export default AppRoutes;
