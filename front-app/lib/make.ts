const endpoints = {
  "getFestivals": process.env.MAKE_FESTIVAL_URL!,
  "getHebergements": process.env.MAKE_HEBERGEMENT_URL!,
  "getTransports": process.env.MAKE_TRANSPORT_URL!,
  "sendProposition": process.env.MAKE_PROPOSITION_URL!
};

export async function callMake<T>(endpoint: keyof typeof endpoints, args: any): Promise<T> {
  const res = await fetch(endpoints[endpoint], {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(args)
  });
  // console.log("Make response:", res.status, await res.json()); // Debugging line
  let parsed;
  try {
    parsed = JSON.parse(await res.text());
  } catch (e : any) {
    console.error("❌ JSON parse error:", e);
    throw new Error("JSON parse error: " + e.message + " | Data: " + await res.text());
  }
  return parsed;
}
