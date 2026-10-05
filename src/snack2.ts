// ---- TIPI DI SUPPORTO ----
export type Sesso = "m" | "f";
export type TipoContratto = "indeterminato" | "determinato" | "freelance";

// ---- TYPE ALIAS PRINCIPALE ----
export type Dipendente = {
    nome: string;
    cognome: string;
    annoNascita: number;
    sesso: Sesso;
    anniDiServizio: number[];

    // BONUS
    readonly emailAziendale: string; // non modificabile
    contratto: TipoContratto;
};

// ---- ESEMPI D'USO ----
export const mario: Dipendente = {
    nome: "Mario",
    cognome: "Rossi",
    annoNascita: 1985,
    sesso: "m",
    anniDiServizio: [2014, 2015, 2017, 2018],
    emailAziendale: "mario.rossi@azienda.it",
    contratto: "indeterminato",
};

export const giulia: Dipendente = {
    nome: "Giulia",
    cognome: "Bianchi",
    annoNascita: 1992,
    sesso: "f",
    anniDiServizio: [2020, 2021, 2022],
    emailAziendale: "giulia.bianchi@azienda.it",
    contratto: "determinato",
};