"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductPage() {

  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addToCart = async () => {

    await fetch("http://127.0.0.1:8000/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: id, quantity: 1 }),
    });

    alert("Product added to cart");

  };

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-10">

      {/* Home Button */}
      <Link href="/" className="text-blue-600 font-semibold">
        ← Back to Home
      </Link>

      <div className="flex gap-12 mt-6 bg-white p-8 rounded shadow">

        {/* Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src={`/images/${product.id}.jpg`}
            className="h-96 object-contain"
          />
        </div>

        {/* Details */}
        <div className="w-1/2">

          <h1 className="text-3xl font-bold mb-2">
            {product.name}
          </h1>

          <p className="text-gray-500 mb-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex text-yellow-500 mb-3">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            <span className="text-gray-600 ml-2">(245 ratings)</span>
          </div>

          <p className="text-green-600 text-3xl font-bold mb-2">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 mb-6">
            Stock: {product.stock}
          </p>

          <button
            onClick={addToCart}
            className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}