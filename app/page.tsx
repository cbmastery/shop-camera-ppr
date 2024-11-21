import { Suspense } from "react";
import { SingleProduct } from "@/components/single-product";

export default function Page() {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct />
    </div>
  );
}
