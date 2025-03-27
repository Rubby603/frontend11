import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Price: ${item.price}</p>
                  
               
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-gray-700 dark:text-gray-300">Color:</span>
                    <div 
                      className="w-6 h-6 rounded-full border-2 shadow-md" 
                      style={{ backgroundColor: item.selectedColor || "gray" }}
                    />
                    <span className="text-gray-800 dark:text-white font-semibold">{item.selectedColor || "None"}</span>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <Button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                    >
                      <PlusOutlined />
                    </Button>

                    <span className="text-lg font-medium">{item.quantity}</span>

                    <Button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                      disabled={item.quantity === 1}
                      className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-lg disabled:opacity-50"
                    >
                      <MinusOutlined />
                    </Button>

                    <Button 
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                    >
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Total: ${totalAmount.toFixed(2)}</h3>
            <Button 
              onClick={clearCart} 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Empty Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
