import React, { useEffect, useState } from "react";
import CategoryItem from "../../components/CategoryItem";
import Banner from "../Banner/Banner";
import HomeSection from "../HomeSection/HomeSection";

const Home = () => {
  const [categories, setCategories] = useState([]);
  async function getCategory() {
    fetch("http://localhost:8000/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getCategory();
  }, [categories]);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => (
          <CategoryItem
            id={category._id}
            key={category._id}
            slug={category.slug}
            categoryName={category.categoryName}
            imagePath={category.imagePath}
          />
        ))}
      </div>
      <HomeSection></HomeSection>
    </div>
  );
};

export default Home;
