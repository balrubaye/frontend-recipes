import React, {Component} from 'react';
import Rxjs from 'rxjs';

export default class ScrollingHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            headerClass:'header'
        };

        this.tickHeader= this.tickHeader.bind(this);
        this.flag=true;
    }

    tickHeader(){
        //console.log(this.flag);
        if(this.flag){
            window.requestAnimationFrame(()=>{
                console.log('sdsd');
                
                if(window.scrollY > 50){
                //var hd= document.querySelector('#header');
                //hd.className ='header small';
                this.setState({headerClass:'header small'});
            
                }
                else{
                //var hd= document.querySelector('#header');
                //hd.className ='header'
                this.setState({headerClass:'header'});
            }
            this.flag=true;
            });
        }
        this.flag=false;
    }
    componentDidMount(){
        //window.addEventListener('scroll', this.tickHeader);
        

        let scroll$= Rxjs.Observable.fromEvent(window,'scroll');
        //console.log(counter);
        scroll$
        .debounceTime(200)
        .subscribe( (e)=>{
          
            this.tickHeader();
            
        })
    }

    componentWillUnmount(){
        //window.removeEventListener('scroll', this.tickHeader)
    }
    render(){
        return(<div><header>
                <div id='header' className={this.state.headerClass}>
                    <h3>Bassam Al Rubaye</h3>
                    
                </div>
                </header>
                
                <div id='main'>
                
                    <h2>titleeeeee</h2>
                    <p>Hello 111</p>
                    
                    
                    <h2>titleeeeee</h2>
                    <p>Hello 222</p>
                   
                    <h2>titleeeeee</h2>
                    <p>Hello 333</p>
                   
                    <h2>titleeeeee</h2>
                    <p>Hello 444</p>
                    
                    
                    <h2>titleeeeee</h2>
                    <p>Hello 555</p>
                <div className='space' ></div>
                    
                </div>
            
            <footer>
                <div className='footer'>Footer</div>
            </footer> </div>);
    }
}