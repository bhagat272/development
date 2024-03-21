import React, { useState } from 'react'

const List = () => {
    const [message,setmessage]=useState("")
    

  return (
    <div>
      <input type='text' value={message} />
    
    </div>
  )
}

export default List
