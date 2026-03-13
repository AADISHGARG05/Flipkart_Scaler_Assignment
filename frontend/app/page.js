"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {

  const API = "https://flipkart-backend-oc3i.onrender.com";

  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(`${API}/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Product fetch error:", err));

  }, []);

  const addToCart = async (id) => {

    try {

      await fetch(`${API}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: id, quantity: 1 }),
      });

      alert("Added to cart 🛒");

    } catch (error) {

      console.error("Cart error:", error);
      alert("Failed to add product");

    }

  };

  return (
    <>
      <Header />

      {/* HERO BANNER */}
      <div className="bg-yellow-400 text-center py-3 font-semibold text-lg">
        Big Billion Days Sale 🔥 Up to 70% OFF
      </div>

      <main className="flex bg-gray-100 min-h-screen p-6 gap-6">

        {/* CATEGORY SIDEBAR */}
        <aside className="w-60 bg-white p-4 rounded shadow">

          <h2 className="font-bold mb-3">Categories</h2>

          <ul className="space-y-2 text-gray-700">

            <li
              onClick={() => router.push("/search?q=iphone")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Electronics
            </li>

            <li
              onClick={() => router.push("/search?q=jeans")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Fashion
            </li>

            <li
              onClick={() => router.push("/search?q=shoes")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Footwear
            </li>

          </ul>

        </aside>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-4 gap-4 flex-1">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white p-3 rounded shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >

              <Link href={`/product/${product.id}`}>

                <img
                  src={`/images/${product.id}.jpg`}
                  className="w-full h-48 object-contain mb-4 p-4 bg-white"
                />

                <h2 className="font-semibold text-lg">
                  {product.name}
                </h2>

                <p className="text-gray-500 text-sm">
                  {product.description}
                </p>

                <div className="flex text-yellow-500 mt-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <p className="text-green-600 font-bold mt-2">
                  ₹ {product.price}
                </p>

                <p className="text-sm text-gray-500">
                  Stock: {product.stock}
                </p>

              </Link>

              <button
                onClick={() => addToCart(product.id)}
                className="mt-3 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </main>
    </>
  );
}