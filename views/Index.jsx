import React from 'react'
import pokemon from '../models/pokemon';

function Index(props) {

    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };
        
  return (
    <>
    <div style={myStyle}><h1>My First React Component!</h1> </div>
    <ul>
        {props.pokemon.map((poke,i) =>{
            return <li> <h3>{poke.name.charAt(0).toUpperCase()+poke.name.substring(1)}</h3></li>
        
        }
        )}



    </ul>
    
    
    
   
    </>
  )
}

export default Index