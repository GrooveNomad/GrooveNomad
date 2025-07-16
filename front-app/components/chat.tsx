"use client";

import { useChat } from "ai/react";

import { Chat } from "@/components/ui/chat";

export default function ChatDemo() {
  const { messages, input, handleInputChange, handleSubmit, status, stop, } =
    useChat({
      api: "/api/chat",
      maxSteps: 2
    });

  const isLoading = status === "submitted" || status === "streaming";

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
