interface Settings {
    pageTitle: string;
    productName: string;
    subtitle: string;
    price?: string;
    highlights: string[];
    cta: [string, string];
    footer: {
        text: string;
        links: [string, string][];
    };
}

const settings: Settings = {
    pageTitle: "My Awesome Landing Page Template", // Page title
    productName: "My Awesome Landing Page Template", // Product name
    subtitle: "A modern, open-source Next.js 16 preset for building landing pages.", // Product subtitle
    price: "ZERO. IT'S FREE!", // Product price (optional)
    cta: ["Get Started", "example.com"], // [text, link]
    highlights: [
        "Built with Next.js 16 and TypeScript",
        "Tailwind CSS for styling",
        "Open-source and free to use",
        "Easy to customize and extend",
    ], // Product highlights
    footer: {
        text: "Made with ❤️ by Vedansh Shetti", // Footer text (copyright lines and rights reserved lines)
        links: [
            ["https://github.com/vedanshshetti/nextjs-preset", "Repository (GitHub)"], // [text, link]
            ["https://github.com/vedanshshetti", "Creator (GitHub)"], // [text, link]
        ]
    },
};


export default settings;