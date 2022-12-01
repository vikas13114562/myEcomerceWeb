import React from "react";
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";
import ProductCard from "../product-card/ProductCard";

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">{title.toLowerCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, ind) => ind < 4)
          .map((product) => {
            return <ProductCard Key={product.id} products={product} />;
          })}
      </div>
    </div>
  );
}
