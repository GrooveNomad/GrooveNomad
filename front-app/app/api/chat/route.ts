import { NextRequest } from "next/server";
import OpenAI from "openai";
import { tools } from "@/lib/tools";
import { callMake } from "@/lib/make";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "o4-mini-2025-04-16",
    messages,
    tools: [...tools],
    tool_choice: "auto",
    stream: true
  });

  const encoder = new TextEncoder();

  async function* streamResponse() {
    for await (const chunk of completion) {
      const delta = chunk.choices?.[0]?.delta;
      const toolCall = chunk.choices?.[0]?.delta?.tool_calls?.[0];

      if (toolCall?.function) {
        const { name, arguments: rawArgs } = toolCall.function;
        const args = JSON.parse(rawArgs ?? "{}");
        let data: unknown;

        switch (name) {
          case "getFestivals":
            data = await callMake("festivals", args);
            break;
          case "getHebergements":
            data = await callMake("hebergements", args);
            break;
          case "getTransports":
            data = await callMake("transports", args);
            break;
        }

        yield encoder.encode(
          `data: ${JSON.stringify({
            role: "tool",
            tool_call_id: toolCall.id,
            name,
            content: JSON.stringify(data)
          })}\n\n`
        );
      } else {
        yield encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`);
      }
    }
  }

  const readableStream = new ReadableStream({
    async pull(controller) {
      for await (const chunk of streamResponse()) {
        controller.enqueue(chunk);
      }
      controller.close();
    }
  });

  return new Response(readableStream, {
    headers: { "Content-Type": "text/event-stream" }
  });
}