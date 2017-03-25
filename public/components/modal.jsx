import React, {Component} from 'react';

export default class ModalWindow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div id={this.props.id} className='modal'>
                    <div className='modal-content'> 
                        <h4> {this.props.title} </h4>
                        <p>  {this.props.content}</p>
                    </div>
                </div>);
    }
}