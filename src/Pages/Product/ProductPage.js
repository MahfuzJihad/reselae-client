import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const params =  useParams();
  
  function getProducts() {
    const categoryId = params.id;
    console.log(categoryId);
    fetch(`http://localhost:8000/products/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  useEffect(() => {
    getProducts();
  }, [setProducts]);
  return (
    <div className="grid grid-cols-4 gap-3">
      {products.map((product) => (
        <ProductCard key={product._id} productName={product.productName} />
      ))}
    </div>
  );
};

export default ProductPage;
