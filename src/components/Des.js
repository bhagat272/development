import React from 'react'
import Data from "./Data.json"
import { useState } from 'react'

const Des = () => {
const [ count , setCount] = useState(0);
function Handle(){
  setCount(count+1);
}
  return (
    <div>

     
<button onClick={Handle}>Click Me!{count}</button>
    {
     
        Data.map((data,i)=>(
        <div key="i">
          <h1>{data.id}</h1>
          <p>{data.name}</p>
          <p>{data.age }</p>
          <h1>{data.email}</h1>
        </div>
        ))
    }
      <button onClick={Handle}>Click Me!{count}</button>
    </div>
  )
}

export default Des;
