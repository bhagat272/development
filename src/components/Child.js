import React, { useContext } from 'react'
import { UserContext } from './Provider' // Correct import statement

const Child = () => {
    const userdata = useContext(UserContext)

    return (
        <div style={{color:"yellowgreen"}}>
            <p>Name: {userdata.name}</p>
            <p>Age: {userdata.age}</p>
        </div>
    )
}

export default Child;
