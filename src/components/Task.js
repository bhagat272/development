import React, { useState } from "react";
import { Taskdata } from "./Taskdata";

const Task = () => {
  const [counts, setCounts] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactNumber, setContactNumber] = useState(""); // New state variable for contact number
const [showCart,setShowCart]=useState(false)
  function handleCount(id) {
    const currentValue = counts?.[id] ?? 0;

    setCounts({
      ...counts,
      [id]: currentValue + 1,
    });
  }

  function reducer(id) {
    const currentValue = counts?.[id] ?? 0;
    if (currentValue > 0) {
      setCounts({
        ...counts,
        [id]: currentValue - 1,
      });
    }
  }

  // Calculate total price
  const total = Taskdata.reduce((sum, product) => {
    return sum + (counts?.[product.id] || 0) * product.price;
  }, 0);

  // Function to handle click on the Proceed button
  const handleProceed = () => {
    window.confirm("Confirm Details to proceed further for payment ?");
  };

  // Function to handle click on the Submit button
  const handleSubmit = () => {
    if (contactNumber !== "" && contactNumber.length === 10) {
      // Only set contactSubmitted to true if contactNumber is not empty
      setContactSubmitted(true);
    }
  };

  return (
    <div id="task" className="row" style={{ color: "whitesmoke" }}>
      <div className="mt-2 ms-2">
        <label
          style={{
            display: "flex",
            border: "2px solid black",
            background: "linear-gradient(to right,black,rgb(175, 152, 285))",
            padding: "1rem",
            borderRadius: "23px 23px 23px",
          }}
        >
          <h4 style={{ margin: "3px", textShadow: "1px 2px 2px white" }}>
            CONTACT
          </h4>
          <input
            onChange={(e) => setContactNumber(e.target.value)}
            style={{ border: "2px solid black", width: "17rem" }}
            className="ms-5"
            type="number"
            placeholder="  Submit number to show produts"
          />
          <button onClick={handleSubmit} className="btn btn-success ms-1">
            Submit
          </button>
        </label>
      </div>
      {contactSubmitted &&
        Taskdata.map((product) => (
          <div id="pro" className="col-md-4" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <h4>
              Amount Payable: ${(counts?.[product.id] || 0) * product.price}
            </h4>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                onClick={() => reducer(product.id)}
                type="button"
                className="btn btn-danger"
              >
                -
              </button>
              <button type="button" className="btn btn-warning">
                {counts?.[product.id] ?? 0}
              </button>
              <button
                onClick={() => handleCount(product.id)}
                type="button"
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </div>
        ))}
<button onClick={() => setShowCart(!showCart)} className="btn btn-primary">
        MY CART
      </button>
      {showCart && contactSubmitted && (
        <div>
          <h2>Summary:</h2>
          {Taskdata.filter((product) => counts?.[product.id] > 0).map(
            (product) => (
              <div
                className="row"
                key={product.id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className="col-md-3 bg-dark ms-4"
                  style={{ border: "1px solid yellow", padding: "15px" }}
                >
                  <p>Product Name: {product.title}</p>
                </div>
                <div
                  className="col-md-3 bg-dark"
                  style={{ border: "1px solid yellow", padding: "10px" }}
                >
                  <p>Quantity: {counts?.[product.id] || 0}</p>
                </div>
                <div
                  className="col-md-3 bg-dark"
                  style={{ border: "1px solid yellow", padding: "10px" }}
                >
                  <p>
                    Total Price: ${(counts?.[product.id] || 0) * product.price}
                  </p>
                </div>
                <div className="col-md-2 mt-4">
                  <button
                    onClick={() => setCounts({ ...counts, [product.id]: 0 })}
                    className="btn btn-danger"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"></path>
                      <path d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"></path>
                    </svg>{" "}
                    Delete Item
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
      {contactSubmitted && (
        <div className="bg-secondary  mt-2 mb-2 ">
          <h2 className="text-dark">Total Payment: ${total}</h2>
        </div>
      )}

      {contactSubmitted && (
        <button onClick={handleProceed} className="btn btn-primary">
          Proceed
        </button>
      )}
    </div>
  );
};

export default Task;
