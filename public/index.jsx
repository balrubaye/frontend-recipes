import React from 'react'
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import Main from './components/main.jsx';
import ScrollingHeaderRecipe from './recipes/scrollingHeaderRecipe.jsx';


class App extends React.Component{
	render(){

		return (<div>
					<div className="navbar-fixed">
						<nav>
							<div className="nav-wrapper">
								<a href="#!" className="brand-logo">Recipes</a>
								<ul className="right hide-on-med-and-down">
								<li><Link to='/'>Home </Link> </li>
								<li><Link to='/scrolling'> Scrolling Header </Link></li>
								</ul>
							</div>
						</nav>
					</div>
					{this.props.children}
				</div>
		);
	}
}

if(typeof window !== 'undefined' ){

	ReactDom.render(
	<Router history={hashHistory} >
		
			
			<Route path='/' component={App}>
				<Route path='/scrolling' component={ScrollingHeaderRecipe} />
		   </Route>
	</Router> , document.getElementById('mainDiv'));
}