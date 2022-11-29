import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryItem = (props) => {
    const navigate = useNavigate();
    function Handler() {
        navigate(`/products/${props.id}`);
    }
    return (
        <div className="card w-full glass">
        <figure><img src={props.imagePath} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title">{props.categoryName}</h2>
          <div className="card-actions justify-end">
            <button onClick={Handler} className="btn btn-primary">View Products</button>
          </div>
        </div>
      </div>
    );
};

export default CategoryItem;