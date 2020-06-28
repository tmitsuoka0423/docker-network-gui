import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/pages/Main/Main';
import Detail from './components/pages/Detail/Detail';

const container = document.getElementById('contents');

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/detail/:id" component={Detail} />
      <Route path="/" component={Main} />
    </Switch>
  </Router>,
  container,
);
