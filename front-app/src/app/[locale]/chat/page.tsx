"use client"

import { Suspense } from "react";
import ClientOnlyWrapper from "@/src/components/ClientOnlyWrapper";
import { useTranslations } from "next-intl";


export default function ChatPage() {
  const t = useTranslations("chat");
  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 text-center bg-white border-b p-4">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
      </header>

      <main className="flex-1 overflow-hidden">
        <Suspense fallback={<div>{t("loading")}</div>}>
          <ClientOnlyWrapper />
        </Suspense>
      </main>
    </div>
  );
}
