import React, {Component} from 'react';
import Rxjs from 'rxjs';
import './autoComplete.css';

export default class AutoComplete extends Component{
    constructor(props){
        super(props);
        this.count=0;
        this._getSearchResult= this._getSearchResult.bind(this);
        this.state={result:[]};
        this.chars='abcdefghijklmnopqrstuvwxyz';
        
    }

    componentDidMount(){
       this.search$= Rxjs.Observable
        .fromEvent(this.searchBox, 'keyup')
        .debounceTime(200)
        .subscribe((e)=>{
            console.log(e);
            if(e.target.value.length===0) this.setState({result:[]});
            else{
            this._getMockedResult(e.target.value)
            .then((result)=>{
                console.log('---result');
                console.log(result);
                    this.setState({result:result})
            })
        }
            
        })
    }

    componentWillUnmount(){
        if(this.search$) this.search$.unsubscribe();
    }

    _getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    _getMockedResult(key){
        return new Promise((resolve, reject) =>{
            let result=[];
            setTimeout( ()=>{
                for(let i=0; i<5; i++){
                    result.push( `${key} ${this.chars.slice(this._getRandomInt(i,24), 24)}`)
                }

                resolve(result);
            }, Math.random()* 900)
        })
    }

    _getSearchResult(){
        return this.state.result.map( (val, i)=>{
            
            return <li key={i}> {`${val} ${++this.count}`}  </li>

        });
    }

    render(){
        return(
            <div className='bsbs-autocomplete'>
                <input type='search' id='searchBox'
                ref={(search)=>{ this.searchBox = search;}} placeholder='search here' />
                <ul className='bsbs-autocomplete-result'>
                   {this._getSearchResult()}
                </ul>
            </div>
        )
    }
} 