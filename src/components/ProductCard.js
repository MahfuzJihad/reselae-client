import React from "react";

const ProductCard = (props) => {
    function Handler() {

    }
  return (
    <div className="card w-full glass">
      <figure>
        <img src={props.imagePath} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.productName}</h2>
        <div className="card-actions justify-end">
          <button onClick={Handler} className="btn btn-primary">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
