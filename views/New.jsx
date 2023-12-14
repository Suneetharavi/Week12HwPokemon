import React from 'react'

function New() {
  return (
    <div>

        <h1>Create A new Pokemon</h1>

        <form action='/pokemon' method='POST'><br/>

        Enter Pokemon Name: <input style={{margin:"1em"}} type='text' name='name'></input><br/>

        Enter Pokemon Image URL: <input style={{margin:"1em"}} type='text' name='img'></input><br/>
        
        <input style={{margin:"1em"}} type="submit" value="Create Pokemon" /><br/>
        
      </form>
        
      <a href="/pokemon">Back</a>
    </div>
  )
}

export default New