import Link from "next/link";
import settings from "./settings";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center space-y-2 bg-background text-foreground font-sans">
            <h1 className="text-5xl font-extrabold font-stretch-extra-condensed mt-auto">{settings.productName}</h1>
            <p className="text-lg mb-auto">
                {settings.subtitle}
            </p>
            
            <section className="flex flex-col items-center justify-center space-y-2 m-auto">
                <h2 className="text-2xl font-extrabold mb-4">Highlights</h2>
                <ul className="flex flex-col gap-2.5">
                    {settings.highlights.map((h: string, i:number)=> <li className="font-mono text-lg font-extrabold italic" key={i}>{h}</li>)}
                </ul>
            </section>

            {settings.price ? <section className="flex flex-col items-center justify-center space-y-2 m-auto">
                    <h2 className="text-2xl font-extrabold mb-4">The Price?</h2>
                    <p className="text-4xl font-black">{settings.price}</p>
                </section>
            : null}

            <Link className="mb-10 text-2xl rounded-md p-3 bg-accent hover:p-5 hover:text-4xl transition-all duration-1000 ease-initial" href={settings.cta[1]}>{settings.cta[0]}</Link>
        </div>
    );
}