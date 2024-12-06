import React, { useEffect } from "react";
import "../styles.css";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="home-page">
      <h1>Current Products 🚀</h1>
      <div className="product-grid">
        {products.length ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found. Create one!</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
