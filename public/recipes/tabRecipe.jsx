import React,{Component} from 'react';
import {Tab, TabItem} from '../components/tab.jsx';

const tabRecipe= (props)=>{
    return (<div className='row'>
            <h3>The Tab Component </h3>

            <Tab >
                <TabItem title='tab#1'>Tab111 Content</TabItem>
                <TabItem title='tab#2'><h4>tab 2 content </h4>
                    <p>my content </p>
                </TabItem>
                <TabItem title='tab#3'>Tab33331</TabItem>
            </Tab>
        </div>);
}

export default tabRecipe;