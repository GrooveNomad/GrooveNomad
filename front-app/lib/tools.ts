export const tools = [
  {
    type: "function",
    function: {
      name: "getFestivals",
      description: "Retourne les informations détaillées d’un festival spécifique.",
      parameters: {
        type: "object",
        properties: {
          festival: {
            type: "string",
            description: "Nom du festival (ex: Tomorrowland)"
          }
        },
        required: ["festival"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "getHebergements",
      description: "Retourne les hébergements correspondant au type choisi et à une destination donnée.",
      parameters: {
        type: "object",
        properties: {
          destinationId: {
            type: "string",
            description: "ID de la destination liée au festival"
          },
          hebergement: {
            type: "string",
            enum: ["Camping", "Auberge", "Hôtel", "Villa"],
            description: "Type d’hébergement recherché"
          }
        },
        required: ["destinationId", "hebergement"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "getTransports",
      description: "Retourne les transports disponibles pour une destination et un type donné.",
      parameters: {
        type: "object",
        properties: {
          destinationId: {
            type: "string",
            description: "ID de la destination liée au festival"
          },
          transport: {
            type: "string",
            enum: ["Avion", "Train", "Bus"],
            description: "Type de transport recherché"
          }
        },
        required: ["destinationId", "transport"]
      }
    }
  }
] as const;