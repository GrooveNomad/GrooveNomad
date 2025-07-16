"use client";

import { useSearchParams } from "next/navigation";
import ChatDemo from "@/components/chat";

export default function ChatPage() {
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get("message");

  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 text-center bg-white border-b p-4">
        <h1 className="text-2xl font-bold">Groove Nomad Chat</h1>
      </header>

      <main className="flex-1 overflow-hidden">
        <ChatDemo initialMessage={initialMessage} />
      </main>
    </div>
  );
}
