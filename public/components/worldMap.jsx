import React, {Component} from 'react';
import d3 from 'd3';


export default class WorldMap extends Component{
    constructor(props){
        super(props);
    }

    _renderMap(){
         //Width and height
		const {width, height}= this.props;

		//Define map projection
		var projection = d3.geo.mercator()
							   .center([ 0, 40 ])
							   .translate([width/2, height/2 ])
							   .scale([ width/7 ]);

		//Define path generator
		var path = d3.geo.path()
						 .projection(projection);

		//Create SVG
		var svg = d3.select("#bsbs-world-map")
					.append("svg")
					.attr("width", width)
					.attr("height", height);

		//Load in GeoJSON data
		d3.json("/public/data/geo/mapshaper_output.json", function(json) {
			
			//Bind data and create one path per GeoJSON feature
			svg.selectAll("path")
			   .data(json.features)
			   .enter()
			   .append("path")
			   .attr("d", path);
	
		});

    }
    componentDidMount(){
       this._renderMap();

    }

    render(){
        return (<div id='bsbs-world-map' className='bsbs-world-map'></div>)
    }
}
