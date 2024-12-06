import React, { useState } from "react";
import "../styles.css";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDelete = async () => {
    const { success, message } = await deleteProduct(product._id);
    alert(success ? "Product deleted successfully" : message);
  };

  const handleUpdate = async () => {
    const { success, message } = await updateProduct(
      product._id,
      updatedProduct
    );
    alert(success ? "Product updated successfully" : message);
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <div className="product-actions">
        <button className="action-button" onClick={() => setIsEditing(true)}>
          ✏️
        </button>
        <button className="action-button" onClick={handleDelete}>
          ❌
        </button>
      </div>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h3>Update Product</h3>
            <input
              type="text"
              placeholder="Name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              }
            />
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
