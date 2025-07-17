"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("features");
  return (
    <section
      id="services"
      className="bg-gray-50 py-16 md:py-32 dark:bg-transparent"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">
              {t("title")}
            </h2>
            <p className="text-body mt-6">
              {t("subtitle")}
            </p>
          </div>
          <div className="relative z-10 grid grid-cols-6 gap-3 mt-8">
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 before:absolute before:-inset-2">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/images/Map.svg"
                      alt={t("cards.0.imageAlt")}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    {t("cards.0.title")}
                  </h2>
                  <p className="text-foreground">
                    {t("cards.0.desc")}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 before:absolute before:-inset-2">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/images/Chatting.svg"
                      alt={t("cards.1.imageAlt")}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    {t("cards.1.title")}
                  </h2>
                  <p className="text-foreground">
                    {t("cards.1.desc")}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 before:absolute before:-inset-2">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/images/Party.svg"
                      alt={t("cards.2.imageAlt")}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative z-10 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition">
                    {t("cards.2.title")}
                  </h2>
                  <p className="text-foreground">
                    {t("cards.2.desc")}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid sm:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-lg font-medium transition">
                    {t("cards.3.title")}
                  </h2>
                  <p className="text-foreground">
                    {t("cards.3.desc")}
                  </p>
                </div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
                  <Image
                    src="/images/Notification.svg"
                    alt={t("cards.3.imageAlt")}
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid sm:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-lg font-medium transition">
                    {t("cards.4.title")}
                  </h2>
                  <p className="text-foreground">
                    {t("cards.4.desc")}
                  </p>
                </div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
                  <Image
                    src="/images/Travel.svg"
                    alt={t("cards.4.imageAlt")}
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
