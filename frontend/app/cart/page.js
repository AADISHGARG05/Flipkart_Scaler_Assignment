"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {

  const API = "https://flipkart-backend-oc3i.onrender.com";

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${API}/cart/`)
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error("Cart fetch error:", err));
  }, []);

  const placeOrder = async () => {
    try {
      await fetch(`${API}/orders/create`, {
        method: "POST",
      });

      alert("Order placed successfully 🎉");

      // clear cart UI after order
      setCart([]);

    } catch (error) {
      console.error("Order error:", error);
      alert("Order failed");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">

      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Your Cart 🛒
        </h1>

        <Link
          href="/"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </Link>

      </div>

      {cart.length === 0 && (
        <p className="text-gray-600">Your cart is empty</p>
      )}

      <div className="space-y-4">

        {cart.map((item, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded shadow flex items-center gap-6"
          >

            <img
              src={`/images/${item.product_id}.jpg`}
              className="h-24 object-contain"
            />

            <div>

              <p className="font-semibold">
                Product ID: {item.product_id}
              </p>

              <p className="text-gray-500">
                Quantity: {item.quantity}
              </p>

            </div>

          </div>

        ))}

      </div>

      {cart.length > 0 && (

        <button
          onClick={placeOrder}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Place Order
        </button>

      )}

    </div>
  );
}