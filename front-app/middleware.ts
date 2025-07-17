import createMiddleware from "next-intl/middleware";
import { locales } from "./src/config";

export default createMiddleware({
  locales,
  defaultLocale: "fr"
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};