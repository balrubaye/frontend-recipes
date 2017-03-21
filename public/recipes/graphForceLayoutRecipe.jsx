import React,{Component} from 'react';
import GraphForceLayout from '../components/graphForceLayout.jsx';

export default class GraphForceLayoutRecipe extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div className='row'>
                <div className='section'>
                    <GraphForceLayout 
                        nodes={[
                                {  title:'Frontend Development' },
                                {  title:'Javascript' },
                                {  title:'ReactJs' },
                                {  title:'AngularJs' },
                                {  title:'RxJs' },
                                {  title:'D3' },
                                {  title:'Backend Development' },
                                {  title:'Sql Server' },
                                {  title:'MongoDB' },
                                {  title:'Redis' },
                                {  title:'Java' },
                                {  title:'Node.js' }
                                
                            ]}
                        links={ [{ source: 0, target: 1 }, { source: 0, target: 2 }, { source: 0, target: 3 }, { source: 0, target: 4 }
                        , { source: 0, target: 5 }, { source: 6, target: 7 }, { source: 6, target: 8 }
                        , { source: 6, target: 9 } , { source: 6, target: 10 } , { source: 6, target: 11 } ]}
                        width={window.innerWidth} height={window.innerHeight} />
                 </div>       

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