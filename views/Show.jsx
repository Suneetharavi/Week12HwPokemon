import React from 'react'

function Show(props) {

    const myStyle1 = {
        color: '#ffffff',
        backgroundColor: 'limegreen',
        
        };

  return (
    <>
    <div style={myStyle1}><h1>"Gotta Catch 'Em All"</h1> </div>
    
                       
                        <h2>{props.poke.name.charAt(0).toUpperCase()+props.poke.name.substring(1)}</h2>
                    

                        <img style={{width:"250px",height:"250px"}} src={props.poke.img+".jpg"}></img><br></br>
                         <a href="/pokemon">Back</a>
    
    </> 
  )
}

export default Show