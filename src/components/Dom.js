import React, { useRef, useState } from 'react'

const Dom = () => {
    let  refElement =  useRef()
    const [name,setname] = useState("sumit")
    function handleclick(){
        refElement.current.value = "Submitted"
        refElement.current.style.color = "white"
        refElement.current.focus()
        refElement.current.style.boxShadow = "43px 33px 23px 35px yellow"
    }
    function handleclear(){
        refElement.current.value = ""
        refElement.current.style.color = "white"
        
    }
  return (
    <div>
      <input ref={refElement} value={name} type='text' onChange={(e)=>(setname(e.target.value))} /> 
      <button type='sumbit' onClick={handleclick}>submit</button>
      <button type='sumbit' onClick={handleclear}>Clear</button>

    </div>
  )
}

export default Dom
