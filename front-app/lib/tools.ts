// lib/tools.ts
import { tool } from "ai";
import { z } from "zod";
import { callMake } from "@/lib/make";

export const tools = {
  getFestivals: tool({
    description: "Retourne les informations détaillées d’un festival spécifique.",
    parameters: z.object({
      festival: z.string().describe("Nom du festival (ex: Tomorrowland)"),
    }),
    execute: async ({ festival }) => {
      const festivals = await callMake("getFestivals", { festival });
      return festivals
    },
  }),

  getHebergements: tool({
    description: "Retourne les hébergements pour une destination donnée et un type spécifié.",
    parameters: z.object({
      destinationId: z.string().describe("ID de la destination (ex: rect7f…)"),
      hebergement: z.enum(["Villa", "Hôtel", "Camping", "Auberge"]).describe("Type d’hébergement (Villa, Hôtel,…)"),
    }),
    execute: async ({ destinationId, hebergement }) => {
      const hebergements = await callMake("getHebergements", { destinationId, hebergement });
      return hebergements;
    },
  }),

  getTransports: tool({
    description: "Retourne les transports disponibles pour une destination et un mode donné.",
    parameters: z.object({
      destinationId: z.string().describe("ID de la destination (ex: rect7f…)"),
      transport: z.enum(["Avion", "Train", "Bus"]).describe("Mode de transport"),
    }),
    execute: async ({ destinationId, transport }) => {
      const transports = await callMake("getTransports", { destinationId, transport });
      return transports;
    },
  }),
   sendProposition: tool({
    description: "Enregistre la proposition finale dans la table Propositions sur Airtable via Make. À utiliser uniquement lorsque l'utilisateur a confirmé tous les choix et fourni ses coordonnées.",
    parameters: z.object({
      Festivals: z.array(z.string()).describe("ID du festival (array, ex: [\"recFESTIVALID\"])"),
      Destination: z.array(z.string()).describe("ID de la destination (array, ex: [\"recDESTID\"])"),
      "Date arrivée": z.string().describe("Date d'arrivée (YYYY-MM-DD)"),
      "Date départ": z.string().describe("Date de départ (YYYY-MM-DD)"),
      "Nom d'utilisateur": z.string().describe("Nom et prénom de l'utilisateur"),
      "Adresse e-mail": z.string().email().describe("Adresse e-mail de l'utilisateur"),
      Hébergement: z.array(z.string()).describe("ID du record Hébergement (array, ex: [\"recHEBID\"])"),
      Transport: z.array(z.string()).describe("ID du record Transport (array, ex: [\"recTRANSPORTID\"])"),
      "nombre de personnes": z.number().int().describe("Nombre de personnes pour la réservation"),
      "Prix activité HU HT": z.number().describe("Prix total des activités retenues"),
      "Prix festival HU HT": z.number().describe("Prix total du festival (prix x nombre personnes)"),
      "activité - iA": z.string().describe("Liste ou texte des activités sélectionnées"),
    }),
    execute: async (proposition) => {
      const result = await callMake("sendProposition", proposition);
      return result;
    },
  }),
};