import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center space-y-2 bg-background text-foreground font-sans">
            <h1 className="text-4xl font-bold">My AI Chatbot</h1>
            <p className="text-lg">
                A simple chatbot with the leading AI models.
            </p>

            <Link href="/chat" className="rounded-md p-2.5 font-bold font-stretch-extra-condensed hover:rounded-lg hover:p-3 transition-all duration-500 ease-in-out">Get Started</Link>
        </div>
    );
}