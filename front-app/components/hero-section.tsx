"use client";

import React, { useState } from "react";
import { PartyPopper, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    router.push("/chat");
  };

  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-5xl font-medium md:text-6xl"
              >
                Ton aventure commence là où la musique t’appelle.
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
              >
                Chaque festival est une porte d’entrée vers une nouvelle
                culture. GrooveNomad t’embarque pour une aventure musicale et
                humaine, pensée rien que pour toi.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      filter: "blur(12px)",
                      y: 12,
                    },
                    visible: {
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.3,
                        duration: 1.5,
                      },
                    },
                  },
                }}
                className="mt-12"
              >
                <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
                  <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    <PartyPopper className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                    <input
                      placeholder="Décrire mon envie…"
                      className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />

                    <div className="md:pr-1.5 lg:pr-0">
                      <Button
                        aria-label="submit"
                        size="sm"
                        className="rounded-(--radius)"
                        type="submit"
                      >
                        <span className="hidden md:block">Envoyer</span>
                        <SendHorizonal
                          className="relative mx-auto size-5 md:hidden"
                          strokeWidth={2}
                        />
                      </Button>
                    </div>
                  </div>
                </form>

                <div className="mt-16 flex justify-center">
                  <div className="relative w-full max-w-3xl aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg">
                    <Image
                      src="/images/hero-illu.png"
                      alt="Illustration GrooveNomad"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
