/*import React, { useState } from 'react'

const Form = () => {
const [name,setname] = useState("")
const [number,setnumber] = useState("")
const [email,setemail] = useState("")

const handleform = (e) => {
  e.preventDefault()
  const formData = {name,email,number}
  console.table(formData)
  const jsonFormData = JSON.stringify(formData);
  console.log(jsonFormData);
}

  return (
    <div>
      <form onSubmit={(e)=>{handleform(e)}}>
      <label>name</label>
      <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}}  />
      <label>email</label>
      <input type='text' value={email} onChange={(e)=>{setemail(e.target.value)}}  />
      <label>number</label>
      <input type='text' value={number} onChange={(e)=>{setnumber(e.target.value)}}  />
      <input type='submit'/>
      </form>
    </div>
  )
}

export default Form */
import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  function handleform(e) {
    e.preventDefault();
    const formData = { name, email, number };
    console.table(formData);
  }

  return (
    <div className="formes">
      <form className="formedd" onSubmit={(e) => handleform(e)}>
        <label>student name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <label>student email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <label>student number</label>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setnumber(e.target.value);
          }}
        />
        <input className="mt-2 mb-2 bg-danger" type="submit" />
        
      </form>
    </div>
  );
};

export default Form;
