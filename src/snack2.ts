// Tipo per il sesso: solo "m" o "f"
type Sesso = "m" | "f";

// Tipo per il contratto (BONUS)
type TipoContratto = "indeterminato" | "determinato" | "freelance";

// Type alias principale
type Dipendente = {
    nome: string;
    cognome: string;
    annoNascita: number;
    sesso: Sesso;
    anniDiServizio: number[];

    // BONUS
    readonly emailAziendale: string; // non modificabile
    contratto: TipoContratto;
};

// ---- ESEMPIO D'USO ----
const mario: Dipendente = {
    nome: "Mario",
    cognome: "Rossi",
    annoNascita: 1985,
    sesso: "m",
    anniDiServizio: [2014, 2015, 2017, 2018],
    emailAziendale: "mario.rossi@azienda.it",
    contratto: "indeterminato",
};

const giulia: Dipendente = {
    nome: "Giulia",
    cognome: "Bianchi",
    annoNascita: 1992,
    sesso: "f",
    anniDiServizio: [2020, 2021, 2022],
    emailAziendale: "giulia.bianchi@azienda.it",
    contratto: "determinato",
};

console.log(mario);
console.log(giulia);

// ❌ ERRORI (commentati perché il compilatore li blocca):

// mario.emailAziendale = "altro@azienda.it";
// → Cannot assign to 'emailAziendale' because it is a read-only property.

// const luca: Dipendente = { ..., sesso: "x" };
// → Type '"x"' is not assignable to type 'Sesso'.

// const anna: Dipendente = { ..., contratto: "stage" };
// → Type '"stage"' is not assignable to type 'TipoContratto'.