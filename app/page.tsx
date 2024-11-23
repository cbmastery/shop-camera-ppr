import { Suspense } from "react";
import { SingleProduct } from "@/components/single-product";
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from "@/components/recommended-products";
import { Ping } from "@/components/ping";

export default function Page() {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct />

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts />
      </Suspense>

      <Ping />

      {/* <Suspense fallback={<ReviewsSkeleton />}><Reviews /></Suspense> */}
    </div>
  );
}
