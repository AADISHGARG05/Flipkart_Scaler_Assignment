"use client";

import { Suspense } from "react";
import SearchPage from "./SearchPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10">Loading search...</div>}>
      <SearchPage />
    </Suspense>
  );
}