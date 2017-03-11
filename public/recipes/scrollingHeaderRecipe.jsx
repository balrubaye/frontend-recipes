import React,{Component} from 'react';
import ScrollingHeader from '../components/scrolling-header.jsx';

export default class ScrollingHeaderRecipe extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div className='row'>
                <ScrollingHeader  /> 
                <div className='row space'>
                   <div className='section'>  
                    <h2>The scrolling header</h2>
                    <p>This recipe is to show how the header can be changed with scrolling vertically</p>
                    <p> It can be done using simple JS with CSS, but here React with RXjs and Material CSS used to create this components</p>
                   </div> 
                </div>
                <div className='section space'> </div>
            <footer>
                <div className='footer'>Footer</div>
            </footer> </div>);
    }
}