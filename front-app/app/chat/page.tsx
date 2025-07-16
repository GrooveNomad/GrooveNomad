import ChatDemo from "@/components/chat";

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Groov Nomad chat</h1>
        <ChatDemo />
    </div>
  );
}
