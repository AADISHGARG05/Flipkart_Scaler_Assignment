"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {

  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {

    if (!query.trim()) return;

    router.push(`/search?q=${query}`);

  };

  return (
    <header className="bg-blue-600 text-white flex items-center justify-between px-8 py-3">

      <Link href="/" className="text-2xl font-bold">
        Flipkart
      </Link>

      <div className="flex gap-3 items-center">

        <input
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded text-black w-80"
        />

        <button
          onClick={handleSearch}
          className="bg-yellow-400 text-black px-4 py-2 rounded"
        >
          Search
        </button>

      </div>

      <div className="flex gap-6 items-center">

        <Link href="/cart">
          🛒 Cart
        </Link>

        <button className="bg-white text-blue-600 px-4 py-1 rounded">
          Login
        </button>

      </div>

    </header>
  );
}