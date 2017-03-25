import React from 'react'
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import Main from './components/main.jsx';
import ScrollingHeaderRecipe from './recipes/scrollingHeaderRecipe.jsx';
import GraphForceLayoutRecipe from './recipes/graphForceLayoutRecipe.jsx';
import ImageGallaryRecipe from './recipes/imageGalleryRecipe.jsx';
import ModalWindowRecipe from './recipes/modalWindowRecipe.jsx';
import TabRecipe from './recipes/tabRecipe.jsx';
import AutoCompleteRecipe from './recipes/autoCompleteRecipe.jsx';


class App extends React.Component{
	render(){

		return (<div>
					<div className="navbar-fixed">
						<nav>
							<div className="nav-wrapper">
								<a href="#" className="brand-logo">Web front-end Recipes</a>
								<ul className="right hide-on-med-and-down">
								<li><Link to='/'>Home </Link> </li>
								<li><Link to='/scrolling'> Scrolling Header </Link></li>
								<li><Link to='/graph'> Graph </Link></li>
								<li><Link to='/gallary'> Image Gallary </Link></li>
								<li><Link to='/modal'> Modal Window</Link></li>
								<li><Link to='/tab'> Tab</Link></li>
								<li><Link to='/autocomplet'> AutoComplete</Link></li>
								</ul>
							</div>
						</nav>
					</div>
					{window.location.hash === '#/' ? 'helloooo' : ''}
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
				<Route path='/graph' 	 component={GraphForceLayoutRecipe} />
				<Route path='/gallary' 	 component={ImageGallaryRecipe} />
				<Route path='/modal' 	 component={ModalWindowRecipe} />
				<Route path='/tab' 	 component={TabRecipe} />
				<Route path='/autocomplet' 	 component={AutoCompleteRecipe} />
		   </Route>
	</Router> , document.getElementById('mainDiv'));
}