export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center space-y-2 bg-background text-foreground font-sans">
            <h1 className="text-4xl font-bold">Next.js Preset</h1>
            <p className="text-lg">
                A modern, open-source Next.js 16 preset for building web applications.
            </p>

            <section className="flex flex-col group items-center justify-center space-y-2 mt-11">
                <h2 className="text-lg">Hover here &darr;</h2>
                <p className="opacity-0 font-mono group-hover:opacity-80 transition-all duration-500 bg-transparent card p-2.5 rounded-md leading-relaxed text-sm">
                    <strong className="text-lg font-sans">Project Details:</strong> <br />
                    <strong>Next.js Version:</strong> 16.2.12 <br />
                    <strong>React Version:</strong> 19.2.8 <br />
                    <strong>React DOM Version:</strong> 19.2.8 <br />
                    <strong>TypeScript Version:</strong> 7.0.2 <br />
                    <strong>Tailwindcss Version:</strong> 4.3.3 <br />
                    <strong>Biome Version:</strong> 2.5.6 <br />
                </p>
            </section>
        </div>
    );
}