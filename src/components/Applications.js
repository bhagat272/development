import React from 'react'
import { Link } from 'react-router-dom'

const Applications = () => {
  return (
    <div>
      <div className="ms-2 mt-3 texter" style={{ display: "flex", gap: "8px" ,fontFamily:"cursive",flexDirection:"column",justifyContent:"center",alignItems:"center",
    padding:"8rem",fontSize:"1.5rem"}}>
          
          <Link to="/todo">TO-DO</Link>
          <Link to="/form">Form</Link>
          <Link to="/WeatherApp">WeatherApp</Link>
          <Link to="/ShopCart">E-commerce Site</Link>
          <Link to="/Cart">Cart</Link>
          <Link to="/muiform">Mui Form</Link>
          <Link to="/portfolio">Portfolio</Link>
           
        
      </div>
    </div>
  )
}

export default Applications
