import React, {Component} from 'react';
import Rxjs from 'rxjs';

require('./scrollingHeader.css');

export default class ScrollingHeader extends Component{
	constructor(props){
        super(props);
        this.state={
            headerClass:'header'
        };

        this._tickHeader= this._tickHeader.bind(this);
        this.flag=true;
        this.scroll$=null;
        
    }

    _tickHeader(){
        //console.log(this.flag);
        if(this.flag){
            window.requestAnimationFrame(()=>{
                console.log('sdsd');
                
                if(window.scrollY > 50){
               
                this.setState({headerClass:'header small'});
            
                }
                else{
                
                this.setState({headerClass:'header'});
            }
            this.flag=true;
            });
        }
        this.flag=false;
    }
    componentDidMount(){
               
        console.log('----------Mount ---------')
         this.scroll$= Rxjs.Observable.fromEvent(window,'scroll')
        .debounceTime(200)
        .subscribe( (e)=>{
          
            this._tickHeader();
            
        })
    }

    componentWillUnmount(){
        
        this.scroll$.unsubscribe();

    }
    render(){
        return(<header>
                <div id='header' className={this.state.headerClass}>
                    <h3>Bassam Al Rubaye</h3>
                    
                </div>
                </header>);
                
                
    }
}