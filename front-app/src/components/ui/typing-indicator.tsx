import { Dot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="justify-left flex space-x-1">
      <div className="rounded-lg bg-muted p-3">
        <div className="flex -space-x-2.5">
          <Dot className="h-5 w-5 typing-dot-1" />
          <Dot className="h-5 w-5 typing-dot-2" />
          <Dot className="h-5 w-5 typing-dot-3" />
        </div>
      </div>
    </div>
  );
}
