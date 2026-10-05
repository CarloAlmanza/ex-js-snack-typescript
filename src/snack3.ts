import type { Dipendente } from "./snack2";

// ---- TIPI DI SUPPORTO ----
export type LivelloEsperienza = "Junior" | "Mid" | "Senior";

// ---- DEVELOPER ----
export type Developer = Dipendente & {
    livelloEsperienza: LivelloEsperienza;
    linguaggi?: string[];       // opzionale
    certificazioni: string[];   // può essere vuoto []
};

// ---- PROJECT MANAGER ----
export type ProjectManager = Dipendente & {
    teamSize: number | null;         // null se non ha ancora un team
    budgetGestito?: number;          // opzionale
    stakeholderPrincipali: string[]; // può essere vuoto []
};

// ---- BONUS: TEAM ----
// Tuple: [ProjectManager, Developer, ...Developer[]]
// - 1° elemento: ProjectManager
// - almeno UN Developer obbligatorio
export type Team = {
    nome: string;
    progettoAttuale: string | null;
    budget: number;
    membri: [ProjectManager, Developer, ...Developer[]];
};

// ---- ESEMPI D'USO ----
export const pmAnna: ProjectManager = {
    nome: "Anna",
    cognome: "Verdi",
    annoNascita: 1980,
    sesso: "f",
    anniDiServizio: [2010, 2011, 2012],
    emailAziendale: "anna.verdi@azienda.it",
    contratto: "indeterminato",
    teamSize: 4,
    budgetGestito: 250_000,
    stakeholderPrincipali: ["Cliente A", "Cliente B"],
};

export const devLuca: Developer = {
    nome: "Luca",
    cognome: "Neri",
    annoNascita: 1995,
    sesso: "m",
    anniDiServizio: [2022, 2023, 2024],
    emailAziendale: "luca.neri@azienda.it",
    contratto: "determinato",
    livelloEsperienza: "Mid",
    linguaggi: ["TypeScript", "Go"],
    certificazioni: ["AWS Certified Developer"],
};

export const devNeo: Developer = {
    nome: "Sara",
    cognome: "Gialli",
    annoNascita: 2000,
    sesso: "f",
    anniDiServizio: [2025],
    emailAziendale: "sara.gialli@azienda.it",
    contratto: "determinato",
    livelloEsperienza: "Junior",
    // linguaggi omesso → ok, è opzionale
    certificazioni: [], // array vuoto → ok
};

export const teamAlpha: Team = {
    nome: "Team Alpha",
    progettoAttuale: "Refactoring piattaforma",
    budget: 500_000,
    membri: [pmAnna, devLuca, devNeo], // ✅ 1 PM + 2 Developer
};