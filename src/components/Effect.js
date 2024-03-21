import React, { useEffect, useState } from 'react'

const Effect = () => {
     const [count,setcount]=useState(0)
    const [name,setname] = useState("sumit")
function handlecount(){
    setcount(count+1)
}
function handlename(){
  setname("sumit kumar")
  setcount("No counter click")
}
    useEffect(()=>{
        console.log("updated")
        document.title = `${count} times`
      
    },[count])
  return (
    <div>
      <h1 style={{color:"yellow"}}>COUNTER : {count}</h1>
      <button onClick={handlecount}>click</button>
      <button onClick={handlename}>name</button>
    </div>
  )
}

export default Effect
