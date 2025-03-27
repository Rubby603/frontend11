import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

 

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
      >
        <IoMdArrowBack />
      </button>
      {product?.image && (
        <img
          className="w-full h-64 object-cover rounded-lg"
          src={product.image}
          alt={product.name || "Product"}
        />
      )}
      <h2 className="text-2xl font-semibold mt-4">{product?.name}</h2>
      <p className="text-gray-600 dark:text-gray-300">Price: ${product?.price}</p>
      {product?.color && (
        <div className="mt-4 flex items-center">
          <span className="text-gray-600 dark:text-gray-300 mr-2">Color:</span>
          <div
            className="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600"
            style={{ backgroundColor: product.color }}
          />
        </div>
      )}
      <p className="mt-2">{product?.description || "No description available."}</p>
    </div>
  );
}

export default ProductDetails;
