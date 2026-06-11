"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { locales, Locales } from "@/app/i18n";
import { settings } from "@/app/global.config";

export default function Navbar() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = (params.locale as Locales) || "en";

  // Replaces the locale in the URL
  const switchLocale = (newLocale: string) => {
    if (!pathname) return;
    const pathPart = pathname.replace(`/${currentLocale}`, "");
    router.push(`/${newLocale}${pathPart}`);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Left Side: Brand and Main Links */}
        <div className="flex items-center space-x-8">
          <Link href={`/${currentLocale}`} className="text-xl font-bold tracking-tight">
            {settings.name || "Shop"}
          </Link>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <Link href={`/${currentLocale}`} className="hover:text-black dark:hover:text-white transition">
              Home
            </Link>
            <Link href={`/${currentLocale}/p`} className="hover:text-black dark:hover:text-white transition">
              {locales[currentLocale]?.products || "Products"}
            </Link>
          </div>
        </div>

        {/* Right Side: Locale Switcher */}
        <div className="flex items-center space-x-4">
          <select
            value={currentLocale}
            onChange={(e) => switchLocale(e.target.value)}
            className="bg-transparent border border-zinc-300 dark:border-zinc-700 py-1.5 px-3 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-500 cursor-pointer"
          >
            {Object.keys(locales).map((loc) => (
              <option key={loc} value={loc} className="dark:bg-zinc-900">
                {loc.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

      </div>
    </nav>
  );
}

