import React, { useState } from "react";
import { products } from "./DummyJsonData";

const Products = () => {
  const [counts, setCounts] = useState({});

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
  const total = products.reduce((sum, product) => {
    return sum + ((counts?.[product.id] || 0) * product.price);
  }, 0);

  return (
    <div className="row" style={{ color: "whitesmoke" }}>
      {products.map((product) => (
        <div id="products" className="col-md-4" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <h4>Amount Payable: ${(counts?.[product.id] || 0) * product.price}</h4>
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
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Products;
