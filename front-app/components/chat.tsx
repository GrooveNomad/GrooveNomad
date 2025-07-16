"use client";

import { useEffect } from "react";
import { useChat } from "ai/react";
import { Chat } from "./ui/chat";

export default function ChatDemo({
  initialMessage,
}: {
  initialMessage?: string;
}) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    isLoading,
  } = useChat();

  useEffect(() => {
    if (initialMessage && append) {
      append({ role: "user", content: initialMessage });
    }
  }, [initialMessage, append]);

  return (
    <Chat
      messages={messages}
      input={input}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isGenerating={isLoading}
      stop={stop}
    />
  );
}
