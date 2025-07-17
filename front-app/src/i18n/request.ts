import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../config";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? "fr";

  // On vérifie sur safeLocale et non locale
  if (!locales.includes(safeLocale as any)) notFound();

  return {
    messages: (await import(`../messages/${safeLocale}.json`)).default,
    locale: safeLocale,
  };
});