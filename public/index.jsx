import React from 'react'
import ReactDom from 'react-dom';
import Main from './components/main.jsx';


if(typeof window !== 'undefined' ){

	ReactDom.render(<Main/>, document.getElementById('mainDiv'));
}