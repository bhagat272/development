import React from "react";
import "../../src/Slider.css";

const Cards = () => {
  return (
    <div className="row mt-2">
      <div className="card ms-5" style={{ width: "22rem", height: "30rem" }}>
        <img src="/media/clothes.png" className="card-img-top" alt="Clothes" />
        <div className="card-body">
          <h5 className="card-title">Top Brand Clothes</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="card ms-4" style={{ width: "18rem" }}>
        <img src="/media/computer.png" className="card-img-top" alt="Computer" />
        <div className="card-body">
          <h5 className="card-title">Computers</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="card ms-4" style={{ width: "18rem" }}>
        <img src="/media/electronics.png" className="card-img-top" alt="Electronics" />
        <div className="card-body">
          <h5 className="card-title">Electronics</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="card ms-4" style={{ width: "22rem", height: "30rem" }}>
        <img src="/media/speaker.png" alt="Speaker" />
        <div className="card-body">
          <h5 className="card-title">Speakers</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
