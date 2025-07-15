import ChatDemo from "@/components/chat";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 text-center bg-white border-b p-4">
        <h1 className="text-2xl font-bold">Groov Nomad chat</h1>
      </header>

      <main className="flex-1 overflow-hidden">
        <ChatDemo />
      </main>
    </div>
  );
}
