import React, { Component } from 'react';
import Rxjs from 'rxjs';

import './scrollingHeader.css';

export default class ScrollingHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMin: false
    };
    this.scrolls$ = null;
  }
  componentDidMount() {
    this.scrolls$ = Rxjs.Observable.fromEvent(window, 'scroll')
    .debounceTime(200)
    .subscribe(e => {
      if (window.scrollY > 60) {
        this.setState({ isMin: true });
      } else {
        this.setState({ isMin: false });
      }
    });
  }

  componentWillUnmount() {
    if (this.scrolls$) this.scrolls$.unsubscribe();
  }
  render() {
    return (
      <div className={`bs-scrolling-header ${this.state.isMin ? 'small' : ''}`}>
        <h3>My Header!! </h3>
      </div>
    );
  }
}
