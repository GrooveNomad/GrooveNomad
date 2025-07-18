"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Globe2 } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { useTranslations } from "next-intl";

const LANGS = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("languageSwitcher");

    const basePath = pathname.replace(/^\/(fr|en|es)/, "");

    const changeLang = (code: string) => {
        if (code === locale) return;
    router.push(`/${code}${basePath === "/" ? "" : basePath}`);
  };

  // Trouver la langue courante
  const current = LANGS.find((l) => l.code === locale) || LANGS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* size="sm" → identique à Commencer */}
        <Button
          size="sm"
          variant="outline"
          className="flex items-center gap-2"
          aria-label={t("label")}
        >
          <Globe2 className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGS.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLang(lang.code)}
            className={locale === lang.code ? "font-bold" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            <span>{t(lang.code)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}