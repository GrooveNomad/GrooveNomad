const endpoints: Record<string, string> = {
  festivals: process.env.MAKE_FESTIVALS_URL ?? "",
  hebergements: process.env.MAKE_HEBERGEMENTS_URL ?? "",
  transports: process.env.MAKE_TRANSPORTS_URL ?? ""
};

export async function callMake<T extends object>(
  endpoint: keyof typeof endpoints,
  payload: Record<string, unknown>
): Promise<T> {
  const url = endpoints[endpoint];

  if (!url) {
    throw new Error(`Missing Make webhook URL for ${endpoint}`);
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error("Make error", await res.text());
    throw new Error(`Make call to ${endpoint} failed`);
  }

  return res.json() as Promise<T>;
}