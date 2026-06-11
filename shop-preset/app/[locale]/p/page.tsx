"use client"
import {settings} from "@/app/global.config";
import {locales, Locales} from "@/app/i18n";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import Link from "next/link";

type Product = {
    id: string;
    name: string;
    price: number;
    currency: string;
    image: string;
    description: string;
};

export default function Home() {
    const locale = useParams().locale as string;
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/products");
                if (!res.ok) throw new Error(locales[locale as Locales].fetchMessages.error);
                const data = await res.json();
                setProducts(data.products || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    return (
        <div className="flex flex-col min-h-screen items-center py-20 text-center space-y-2 bg-background text-foreground font-sans">
            <h1 className="text-4xl font-bold">{settings.name}</h1>
            <p className="text-lg">
                {settings.tagline}
            </p>

            <section className="flex flex-col items-center justify-center space-y-4 mt-11 w-full max-w-4xl px-4">
                <h2 className="text-2xl font-bold">{locales[locale as Locales].products}</h2>

                {loading && <p>{locales[locale as Locales].fetchMessages.loading}</p>}
                {error && <p className="text-red-500">Error: {error}</p>}

                {!loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full text-left mt-8">
                        {products.map((product) => (
                            <Link href={`/${locale}/p/${product.id}`} key={product.id} className="group">
                                <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col space-y-3 shadow-sm hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer h-full bg-white dark:bg-zinc-900 overflow-hidden relative">
                                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{product.name}</h3>
                                    <p className="text-2xl font-semibold">{product.currency}{product.price.toFixed(2)}</p>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 flex-1 leading-relaxed">{product.description}</p>

                                    <div className="pt-6 mt-auto">
                                        <p className="text-sm font-semibold tracking-wide uppercase text-zinc-400 group-hover:text-blue-600 transition-colors">View Details &rarr;</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}