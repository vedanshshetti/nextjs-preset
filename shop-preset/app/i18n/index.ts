const de = {
    browse: "Produkte durchsuchen",
    products: "Produkte",
    fetchMessages: {
        error: "Fehler beim Laden der Daten",
        success: "Daten erfolgreich geladen",
        loading: "Daten werden geladen...",
    }
};
const en = {
    browse: "Browse products",
    products: "Products",
    fetchMessages: {
        error: "Error loading data",
        success: "Data loaded successfully",
        loading: "Loading data...",
    }
};

export type Locales = "en" | "de";

export const locales: Record<Locales, typeof en> = { de, en };