"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cart/")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const placeOrder = async () => {

    await fetch("http://127.0.0.1:8000/orders/create", {
      method: "POST",
    });

    alert("Order placed successfully");

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
        <p>Your cart is empty</p>
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