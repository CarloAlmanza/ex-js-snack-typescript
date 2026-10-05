// Tipo "generico" che simula il dato ricevuto da un'API
type DatoAPI = unknown;

async function gestisciDato(dato: DatoAPI): Promise<void> {
    // BONUS: null
    if (dato === null) {
        console.log("Il dato è vuoto");
        return;
    }

    // BONUS: Promise -> aspetto il resolve e ristampo il valore
    if (dato instanceof Promise) {
        const valoreRisolto = await dato;
        console.log("Promise risolta con valore:");
        await gestisciDato(valoreRisolto); // ricorsione per gestire il valore interno
        return;
    }

    // BONUS: Array
    if (Array.isArray(dato)) {
        console.log(`Array di lunghezza: ${dato.length}`);
        return;
    }

    // Stringa
    if (typeof dato === "string") {
        console.log(dato.toUpperCase());
        return;
    }

    // Numero
    if (typeof dato === "number") {
        console.log(dato * 2);
        return;
    }

    // Booleano
    if (typeof dato === "boolean") {
        console.log(dato ? "Sì" : "No");
        return;
    }

    // Tutto il resto
    console.log("Tipo non supportato");
}

// ---- TEST ----
(async () => {
    await gestisciDato("ciao mondo");        // CIAO MONDO
    await gestisciDato(21);                  // 42
    await gestisciDato(true);                // Sì
    await gestisciDato(false);               // No
    await gestisciDato(null);                // Il dato è vuoto
    await gestisciDato([1, 2, 3, 4]);        // Array di lunghezza: 4
    await gestisciDato(Promise.resolve("async!")); // Promise risolta con valore: ASYNC!
    await gestisciDato({ nome: "Luca" });    // Tipo non supportato
})();