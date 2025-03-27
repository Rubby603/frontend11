import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ColorList from "./ColorList";
import Counter from "./Counter";
import Filter from "./Filter";
import { CartContext } from "../Pages/CartContext";
import { Button } from "antd";

function Mycard() {
  const [filters, setFilters] = useState({
    name: "",
    color: "",
    minPrice: "",
    maxPrice: "",
  });

  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [selectedColors, setSelectedColors] = useState({});
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      (!filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.color || product.color.includes(filters.color)) &&
      (!filters.minPrice || product.price >= Number(filters.minPrice)) &&
      (!filters.maxPrice || product.price <= Number(filters.maxPrice))
    );
  });

  return (
    <div className="p-6">
      <Filter filters={filters} setFilters={setFilters} />

      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-6">
          Тийм бараа байхгүй байна 
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover rounded-lg cursor-pointer"
                alt={product.name}
                src={product.image}
                onClick={() => navigate(`/product/${product.id}`)}
              />

              <div className="mt-4">
                <h2
                  className="text-lg font-semibold cursor-pointer hover:underline"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.name}
                </h2>
                <h3 className="text-gray-600 dark:text-gray-300">Price: ${product.price}</h3>

                <ColorList
                  colors={Array.isArray(product.color) ? product.color : [product.color]}
                  selectedColor={selectedColors[product.id] || ""}
                  onSelectColor={(color) =>
                    setSelectedColors((prev) => ({ ...prev, [product.id]: color }))
                  }
                />

                <Counter
                  quantity={quantities[product.id] || 1}
                  onQuantityChange={(qty) =>
                    setQuantities((prev) => ({ ...prev, [product.id]: qty }))
                  }
                />

                <Button
                  className="w-full mt-3 bg-[#111827] hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all"
                  onClick={() =>
                    addToCart({
                      ...product,
                      selectedColor: selectedColors[product.id] || "Default",
                      quantity: quantities[product.id] || 1,
                    })
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Mycard;
