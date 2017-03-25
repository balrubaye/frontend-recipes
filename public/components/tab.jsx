import React, {Component} from 'react';
require('./tab.css');

export class TabItem extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return( <div> {this.props.children } </div>   );
    }
}


export  class Tab extends Component{
    constructor(props){
        super(props);

        this._getTabTitles= this._getTabTitles.bind(this);
        this._getTabContent=this._getTabContent.bind(this);
        this._handleClick= this._handleClick.bind(this);

        this.state={
            selectedIndex: 0
        }
    }
    _getTabTitles(){
        let activeClass='';
            return this.props.children.map((tabitem, indx)=>{
                activeClass= indx === this.state.selectedIndex ? 'active' : '';
                return (<li  className={activeClass}  key={indx} >
                         <a onClick={this._handleClick.bind(this, indx) } className='bsbs-tab-item-title' >
                         {tabitem.props.title} </a> </li>);
            })
    }

    _getTabContent(){
        return this.props.children[this.state.selectedIndex].props.children;
    }

    _handleClick(indx){
        console.log( '--------- ' + indx);
        this.setState({ selectedIndex:indx})
    }

    render(){
        return( 
        <div className='bsbs-tab'>
            <ul className='bsbs-tab-title-ul'>
                {this._getTabTitles()}
            </ul> 

            <div className='bsbs-tab-content'>
                {this._getTabContent()}
            </div>

        </div>)
    }
}