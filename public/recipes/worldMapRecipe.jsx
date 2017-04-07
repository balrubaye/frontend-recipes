import React from'react';
import WorldMap from '../components/worldMap.jsx';

 const worldMapRecipe= ()=>{
    return <WorldMap width={window.innerWidth * .88} height={window.innerHeight *.88} /> 
}

export default worldMapRecipe;