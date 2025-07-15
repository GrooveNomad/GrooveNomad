import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">
              Comment ça marche ?
            </h2>
            <p className="text-body mt-6">
              Un fonctionnement simple et efficace pour une expérience de voyage
              inoubliable.
            </p>
          </div>
          <div className="relative z-10 grid grid-cols-6 gap-3 mt-8">
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 before:absolute before:-inset-2">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/images/Map.svg"
                      alt="Carte personnalisée"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    Un voyage 100% sur-mesure
                  </h2>
                  <p className="text-foreground">
                    Tes envies, ton style, ton budget. GrooveNomad te propose
                    une aventure totalement personnalisée, de la vibe du
                    festival au choix du logement, en passant par les
                    expériences locales.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 before:absolute before:-inset-2">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/images/Chatting.svg"
                      alt="Carte personnalisée"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    Une nouvelle façon de préparer ton trip
                  </h2>
                  <p className="text-foreground">
                    Fini les galères de recherches. Tu discutes avec notre chat,
                    il apprend à te connaître et te construit un séjour idéal en
                    quelques minutes.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 before:absolute before:-inset-2">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/images/Party.svg"
                      alt="Carte personnalisée"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative z-10 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition">
                    Des festivals sélectionnés avec soin
                  </h2>
                  <p className="text-foreground">
                    On ne te propose que le meilleur. Des festivals reconnus
                    pour leur ambiance, leur line-up et leur accessibilité,
                    partout en Europe (et bientôt au-delà).
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid sm:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-lg font-medium transition">
                    Une réponse rapide et un devis instantané
                  </h2>
                  <p className="text-foreground">
                    Pas besoin d’attendre un agent. Une fois tes envies
                    définies, tu reçois une proposition complète (trajets,
                    hébergements, options) claire et modifiable.
                  </p>
                </div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
                  <Image
                    src="/images/Notification.svg"
                    alt="Illustration devis instantané"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid sm:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-lg font-medium transition">
                    Un accompagnement fluide jusqu’au départ
                  </h2>
                  <p className="text-foreground">
                    Ton voyage est entre de bonnes mains. Ton espace personnel
                    te permet de suivre ta réservation, poser tes questions, et
                    ajuster ton séjour jusqu’au dernier moment.
                  </p>
                </div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
                  <Image
                    src="/images/Travel.svg"
                    alt="Illustration devis instantané"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
