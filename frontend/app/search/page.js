"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SearchPage() {

  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [products, setProducts] = useState([]);

  useEffect(() => {

  fetch(`http://127.0.0.1:8000/products/search?q=${query}`)
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        setProducts([]);
      }
    });

}, [query]);

  return (

    <div className="p-10 bg-gray-100 min-h-screen text-black">

      <Link href="/" className="text-blue-600 font-semibold">
        ← Back to Home
      </Link>

      <h1 className="text-2xl font-bold mt-4 mb-6 text-black">
        Search Results for "{query}"
      </h1>

      {products.length === 0 && (
        <p className="text-gray-700">No products found.</p>
      )}

      <div className="grid grid-cols-4 gap-6">

        {products.map(product => (

          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="bg-white p-4 rounded shadow hover:shadow-lg"
          >

            <img
              src={`/images/${product.id}.jpg`}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="font-semibold mt-3">
              {product.name}
            </h2>

            <p className="text-green-600 font-bold">
              ₹ {product.price}
            </p>

          </Link>

        ))}

      </div>

    </div>

  );
}