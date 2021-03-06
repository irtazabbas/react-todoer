/**
 * @fileOverview Declares routes for all functional areas.
 * Will be treated as a special type of component in this app, and named as
 * {targetComponent}.routing.js
 * 'targetComponent' is the file name of the component in which this routing
 * component will/should be used.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Accounts } from './modules/account';
import { Todoer } from './modules/todoer';

export default () => (
  <Switch>
    <Route exact path="/account" component={ Accounts } />
    <Route path="/" component={ Todoer } />
  </Switch>
);
