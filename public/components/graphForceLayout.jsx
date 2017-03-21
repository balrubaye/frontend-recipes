import React, {Component} from 'react';
import d3 from 'd3';

require('./graphForceLayout.css');

export default class GraphForceLayout extends Component{
    constructor(props){
        super(props);

        this.state={
            result:''
        }
    }

    componentDidMount(){
        console.log('=====Mount======');
        
        let{nodes, links,width, height}= this.props;
        //Easy colors
		var colors = d3.scale.category10();

        let svg= d3.select('#graphfource').append('svg')
                .attr('width', width)
                .attr('height', height);

        let force=d3.layout.force()
                    .gravity(0.02)
                    .distance(200)
                    .charge(-100)
                    .size([width, height])
                    .nodes(nodes)
                    .links(links)
                    .charge([-100]);
                   

           force.linkDistance(200);         
        
        let link=svg.selectAll('.link')
                    .data(links)
                    .enter()
                    .append('line')
                    .attr('class', 'link');

                    
        
        let node=svg.selectAll('.node')
                    .data(nodes)
                    .enter()
                    .append('g')
                    .attr('class', 'node')
                    .call(force.drag)
                     
                   
      
          node.append('ellipse')
              .attr('x', -8)
              .attr('y', -8)
              .attr('rx', (d,i) =>{
                  let r=d.title.length *4;
                  return r> 20 ? r : 20; })
              .attr('ry', (d,i) =>{
                  let r=d.title.length *2.5;
                  return r> 18 ? r : 18; })    
              .style('fill', (d,i)=>{
                return colors(i);
              });

          node.append('text')
          .attr('class', 'title')
                    .attr('text-anchor', "middle")
              .text( (d)=> { return d.title;});          

        force.on('tick', ()=>{
            
               
              node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

                // We also need to update positions of the links.
                // For those elements, the force layout sets the
                // `source` and `target` properties, specifying
                // `x` and `y` values in each case.

                link.attr('x1', function(d) { return d.source.x; })
                    .attr('y1', function(d) { return d.source.y; })
                    .attr('x2', function(d) { return d.target.x; })
                    .attr('y2', function(d) { return d.target.y; });
                });  

                force.start();                     

    }

    render(){
        console.log('-----RENDER -----');
        return(<div id='graphfource' className='graph-force'> </div>)
    }
}

