import React, {Component} from 'react';
import ImageGallary from '../components/gallary.jsx';

export default class ImageGalleryRecipe extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let images=['/public/images/sample1.jpg', '/public/images/sample2.jpg'];
        let result= images.map( (i)=> {return <ImageGallary imageSrc={i} />} );
        return <div className='row'> {result} </div>

    }
}