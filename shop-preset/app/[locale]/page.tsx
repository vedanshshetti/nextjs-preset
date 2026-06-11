"use client"
import {settings} from "@/app/global.config";
import {useParams} from "next/navigation";
import {locales} from "@/app/i18n";

export default function Home() {
    const locale = useParams().locale as string;
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-4 bg-background text-foreground font-sans py-32 px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">{settings.name}</h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl">
                {settings.tagline}
            </p>
            <div className="pt-8">
                <a href={settings.website+"/"+locale+"/"+"p/"} rel="noopener noreferrer" className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-opacity">
                    {locales[locale as "de" | "en"].browse} &rarr;
                </a>
            </div>
        </div>
    );
}