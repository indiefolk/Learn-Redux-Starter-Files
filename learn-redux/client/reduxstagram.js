import React from 'react';

import { render } from 'react-dom';

import css from './styles/style.styl';

// Components
import Main from './components/Main';
import Photogrid from './components/Photogrid';
import Single from './components/Single';


// import Router stuff
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Photogrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));

