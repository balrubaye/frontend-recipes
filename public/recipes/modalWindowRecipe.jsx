import React, {Component } from 'react';
import ModalWindow from '../components/modal.jsx';

export default class ModalWindowRecipe extends Component{
    
    render(){
        return (
            <div>
                <a class="waves-effect waves-light btn" href="#modal1">Modal</a>
                <ModalWindow title='my title' content='some content' /> 
            </div>);
    }
}