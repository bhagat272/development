//  import React, { useState } from "react";

// const Form = () => {
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [number, setnumber] = useState("");
//   function handleform(e) {
//     e.preventDefault();
//     const formData = { name, email, number };
//     console.table(formData);
//   }

//   return (
//     <div className="formes">
//       <form className="formedd" onSubmit={(e) => handleform(e)}>
//         <label>student name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => {
//             setname(e.target.value);
//           }}
//         />
//         <label>student email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => {
//             setemail(e.target.value);
//           }}
//         />
//         <label>student number</label>
//         <input
//           type="number"
//           value={number}
//           onChange={(e) => {
//             setnumber(e.target.value);
//           }}
//         />
//         <input className="mt-2 mb-2 bg-danger" type="submit" />
        
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: ""
  });

  function handleForm(e) {
    e.preventDefault();
    console.table(form);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="formes">
      <form className="formedd" onSubmit={handleForm}>
        <label>student name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label>student email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label>student number</label>
        <input
          type="number"
          name="number"
          value={form.number}
          onChange={handleChange}
        />
        <input className="mt-2 mb-2 bg-danger" type="submit" />
      </form>
    </div>
  );
};

export default Form;
