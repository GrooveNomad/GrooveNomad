"use client";

import { Button } from "@/src/components/ui/button";
import { PartyPopper, SendHorizonal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function CallToAction() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const t = useTranslations("cta");
  const locale = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    router.push(`/${locale}/chat`);
  };

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4">
            {t("subtitle")}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-sm mt-10 lg:mt-12"
          >
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <PartyPopper className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

              <input
                placeholder= {t("placeholder")}
                className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button
                  aria-label="submit"
                  size="sm"
                  className="rounded-(--radius)"
                  type="submit"
                >
                  <span className="hidden md:block">{t("button")}</span>
                  <SendHorizonal
                    className="relative mx-auto size-5 md:hidden"
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
