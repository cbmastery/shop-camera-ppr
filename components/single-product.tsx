import type { Product } from "@/types/product";
import Image from "next/image";

export async function SingleProduct() {
  const product: Product = await fetch(
    `https://app-router-api.vercel.app/api/products?id=1`
  ).then((res) => res.json());

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-2 md:order-1 md:col-span-1">
        <div className="space-y-2">
          <div className="relative aspect-square">
            <Image
              src={`/${product.image}`}
              className="block rounded-lg grayscale"
              alt={product.name}
              fill
              sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
              priority
            />
          </div>

          <div className="flex gap-x-3">
            <div className="relative aspect-square w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                fill
                sizes="(min-width: 1184px) 75px, (min-width: 768px) 8.33vw, 16.66vw"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-square w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                fill
                sizes="(min-width: 1184px) 75px, (min-width: 768px) 8.33vw, 16.66vw"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-square w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                fill
                sizes="(min-width: 1184px) 75px, (min-width: 768px) 8.33vw, 16.66vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 md:order-3 md:col-span-1">
        {/* <Pricing product={product} /> */}
      </div>

      <div>
        <div></div>

        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
