import { Suspense } from "react";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 text-center bg-white border-b p-4">
        <h1 className="text-2xl font-bold">GrooveNomad chat</h1>
      </header>

      <main className="flex-1 overflow-hidden">
        <Suspense fallback={<div>Chargement du chat…</div>}>
          <ClientOnlyWrapper />
        </Suspense>
      </main>
    </div>
  );
}
