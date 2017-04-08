import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import Home from './components/home.jsx';
import ScrollingHeaderRecipe from './recipes/scrollingHeaderRecipe.jsx';


import './index.css';

const App = (props) => (
  <div>
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Web front-end Recipes</a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home </Link> </li>
            <li><Link to="/scrolling"> Scrolling Header </Link></li>

          </ul>
        </div>
      </nav>
    </div>
    {window.location.hash === '#/' ? <Home /> : ''}
    {props.children}
  </div>);


if (typeof window !== 'undefined') {
  ReactDom.render(
    <Router history={hashHistory} >
      <Route path="/" component={App}>
        <Route path="/scrolling" component={ScrollingHeaderRecipe} />

      </Route>
    </Router>, document.getElementById('mainDiv'));
}
