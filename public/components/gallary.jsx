import React, {Component} from 'react';


export default class ImageGallary extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image bsbs-card-image" >
                                <img src={this.props.imageSrc} />
                                {this.props.caption ? '<span className="card-title">Card Title</span>' :''  }
                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at .</p>
                            </div>
                        </div>
                    </div>
                );
    }
}