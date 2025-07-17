"use client";

import { useSearchParams } from "next/navigation";
import ChatDemo from "@/src/components/chat";

export default function ClientChatPage() {
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get("message") ?? undefined;

  return <ChatDemo initialMessage={initialMessage} />;
}
