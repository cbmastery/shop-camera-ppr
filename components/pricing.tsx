import type { Product } from "@/types/product";
import { Ping } from "@/components/ping";
import { ProductEstimatedArrival } from "./product-estimated-arrival";
import { ProductLowStockWarning } from "./products-low-stock-warning";
import { ProductPrice } from "./product-price";
import { ProductSplitPayments } from "./product-split-payments";
import { ProductUsedPrice } from "./product-used-price";
import { dinero, type DineroSnapshot } from "dinero.js";
import { Suspense } from "react";
import { AddToCart } from "./add-to-cart";
import { delayShippingEstimate, withDelay } from "@/lib/delay";
import { cookies } from "next/headers";

async function AddToCartFromCookies() {
  const cartCount = Number((await cookies()).get("_cart_count")?.value || "0");
  return <AddToCart initialCartCount={cartCount} />;
}

function LoadingDots() {
  return (
    <div className="text-sm">
      <span className="space-x-0.5">
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
          &bull;
        </span>
      </span>
    </div>
  );
}

async function UserSpecificDetails({ productId }: { productId: string }) {
  const data = await withDelay(
    fetch(
      `https://app-router-api.vercel.app/api/products?id=${productId}&filter=price,usedPrice,leadTime,stock`,
      {
        cache: "no-store",
      }
    ),
    delayShippingEstimate
  );

  const product = (await data.json()) as Product;

  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <>
      <ProductSplitPayments price={price} />
      {product.usedPrice ? (
        <ProductUsedPrice usedPrice={product.usedPrice} />
      ) : null}
      <ProductEstimatedArrival leadTime={product.leadTime} hasDeliveryTime />
      {product.stock <= 1 ? (
        <ProductLowStockWarning stock={product.stock} />
      ) : null}
    </>
  );
}

export function Pricing({ product }: { product: Product }) {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <div className="space-y-4 rounded-lg bg-gray-900 p-3">
      <ProductPrice price={price} discount={product.discount} />

      <Ping />

      <Suspense fallback={<LoadingDots />}>
        <UserSpecificDetails productId={product.id} />
      </Suspense>

      <Suspense fallback={<AddToCart initialCartCount={0} />}>
        <AddToCartFromCookies />
      </Suspense>
    </div>
  );
}
