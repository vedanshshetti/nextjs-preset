"use client";

import { locales, Locales } from "@/app/i18n";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
};

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const locale = params.locale as Locales;
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        if (!data.success) {
          throw new Error(data.error || "Product not found");
        }
        setProduct(data.product);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 min-h-screen">
        <p className="text-xl animate-pulse">{locales[locale]?.fetchMessages?.loading || "Loading..."}</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col justify-center items-center py-20 min-h-screen space-y-4">
        <p className="text-xl text-red-500">{error || "Product not found"}</p>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 border rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          &larr; Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen items-center px-4 py-16 bg-background text-foreground font-sans">
      <div className="w-full max-w-4xl">
        <button
          onClick={() => router.push(`/${locale}/p`)}
          className="mb-8 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          &larr; Back to {locales[locale]?.products || "Products"}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
          <div className="relative aspect-square bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center p-8">
            <Image
              src={product.image}
              alt={product.name}
              className="object-contain"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-3xl font-semibold opacity-90">{product.currency}{product.price.toFixed(2)}</p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{product.description}</p>

            <button className="bg-foreground text-background font-medium text-lg px-8 py-4 rounded-full hover:opacity-90 active:scale-95 transition-all mt-4 shadow-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

