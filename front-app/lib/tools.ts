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
      console.log("Festivals:", festivals); // Debugging line
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
      console.log("Hebergements:", hebergements); // Debugging line
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
      console.log("Transports:", transports); // Debugging line
      return transports;
    },
  }),
};