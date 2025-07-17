"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Card, CardContent } from "@/src/components/ui/card";
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl";

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

export const testimonials = {
  fr: [
    {
      name: "Jonathan Yombo",
      role: "Fan de techno – 27 ans, Lyon",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      quote: "C’est la première fois que je me sens autant compris pour organiser un voyage. L’outil est simple, rapide, et j’ai vécu un festival incroyable grâce à eux.",
    },
    {
      name: "Yves Kalume",
      role: "Globe-trotter – 25 ans, Bruxelles",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      quote: "GrooveNomad a clairement changé ma manière de voyager. En quelques minutes, j’avais un séjour complet et totalement aligné avec mes envies.",
    },
    {
      name: "Yucel Faruksahan",
      role: "Fêtard curieux – 23 ans, Bordeaux",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      quote: "On a juste répondu à 3 questions dans le chat, et boom : le voyage parfait. Festival au top, logement stylé, bon spot food recommandé. Validé 🔥",
    },
    {
      name: "Anonymous author",
      role: "Premier festival à l’étranger – 21 ans",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      quote: "J’avais un peu peur de me lancer seul, mais GrooveNomad m’a tout facilité. J’ai découvert un festival que je n’aurais jamais trouvé moi-même.",
    },
    {
      name: "Shekinah Tshiokufila",
      role: "Amatrice d’ambiances alternatives – 26 ans, Nantes",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      quote: "Le service est hyper humain et fluide. Le séjour proposé était canon et même les options autour du festival étaient pensées pour moi.",
    },
    {
      name: "Oketa Fred",
      role: "Team road trip – 24 ans, Lille",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote: "C’est tout simplement la meilleure façon de voyager pour un festival. Le chat est top, les reco sont fiables, et on gagne un temps fou.",
    },
    {
      name: "Zeki",
      role: "Électro lover – 29 ans, Berlin",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      quote: "GrooveNomad, c’est comme un pote qui connaît tous les bons plans et qui organise tout pour toi. J’ai adoré l’approche sur-mesure.",
    },
    {
      name: "Joseph Kitheka",
      role: "Voyageur solo – 30 ans, Barcelone",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      quote: "J’ai testé pour un festival au Portugal et c’était parfait. J’ai rencontré plein de monde sur place et tout était calé en amont sans stress.",
    },
    {
      name: "Khatab Wedaa",
      role: "Organisateur dans l’âme – 28 ans, Rennes",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      quote: "J’aime bien tout planifier d’habitude, mais là j’ai lâché prise. Et franchement, c’était mieux que si je l’avais fait moi-même.",
    },
    {
      name: "Rodrigo Aguilar",
      role: "Fan de live & backpack – 25 ans, Lisbonne",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      quote: "La meilleure partie ? Le mix entre musique et découverte locale. J’ai eu l’impression de vivre un vrai trip, pas juste un festival.",
    },
    {
      name: "Eric Ampire",
      role: "Voyage entre potes – 23 ans, Montréal",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      quote: "Gros coup de cœur. On a pu voyager à 5, sans se prendre la tête, et vivre un festival de folie. Je recommande à tout le monde.",
    },
    {
      name: "Roland Tubonge",
      role: "Découverte totale – 22 ans, Lyon",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      quote: "Je pensais juste partir faire la fête… mais c’était bien plus que ça. Un voyage riche, simple à organiser et super bien pensé.",
    },
  ],
  en: [
    {
      name: "Jonathan Yombo",
      role: "Techno fan – 27, Lyon",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      quote: "It’s the first time I’ve felt so understood when planning a trip. The tool is simple, fast, and I had an amazing festival experience thanks to them.",
    },
    {
      name: "Yves Kalume",
      role: "Globe-trotter – 25, Brussels",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      quote: "GrooveNomad really changed the way I travel. In a few minutes, I had a complete trip totally matching my desires.",
    },
    {
      name: "Yucel Faruksahan",
      role: "Curious partygoer – 23, Bordeaux",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      quote: "We just answered 3 questions in the chat and boom: the perfect trip. Great festival, cool lodging, good food spots recommended. Approved 🔥",
    },
    {
      name: "Anonymous author",
      role: "First festival abroad – 21",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      quote: "I was a bit afraid to go alone, but GrooveNomad made it all easy. I discovered a festival I would never have found on my own.",
    },
    {
      name: "Shekinah Tshiokufila",
      role: "Alternative vibes fan – 26, Nantes",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      quote: "The service is super friendly and smooth. The trip proposed was great and even the options around the festival felt made for me.",
    },
    {
      name: "Oketa Fred",
      role: "Road trip team – 24, Lille",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote: "Simply the best way to travel for a festival. The chat is awesome, the recommendations are reliable, and you save so much time.",
    },
    {
      name: "Zeki",
      role: "Electro lover – 29, Berlin",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      quote: "GrooveNomad is like a friend who knows all the good plans and organizes everything for you. I loved the custom approach.",
    },
    {
      name: "Joseph Kitheka",
      role: "Solo traveler – 30, Barcelona",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      quote: "I tried it for a festival in Portugal and it was perfect. Met lots of people there and everything was sorted before with zero stress.",
    },
    {
      name: "Khatab Wedaa",
      role: "Planner at heart – 28, Rennes",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      quote: "I usually like planning everything, but this time I just let go. Honestly, it turned out even better than if I had done it myself.",
    },
    {
      name: "Rodrigo Aguilar",
      role: "Live music & backpack fan – 25, Lisbon",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      quote: "The best part? The mix between music and local discoveries. It felt like a real trip, not just a festival.",
    },
    {
      name: "Eric Ampire",
      role: "Trip with friends – 23, Montreal",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      quote: "Big favorite! We traveled as 5 friends, stress-free, and lived an incredible festival. I recommend it to everyone.",
    },
    {
      name: "Roland Tubonge",
      role: "Total discovery – 22, Lyon",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      quote: "I thought I was just going to party… but it was way more than that. A rich trip, easy to organize and really well thought out.",
    },
  ],
  es: [
    {
      name: "Jonathan Yombo",
      role: "Fan de techno – 27 años, Lyon",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      quote: "Es la primera vez que me siento tan comprendido organizando un viaje. La herramienta es sencilla, rápida, y viví un festival increíble gracias a ellos.",
    },
    {
      name: "Yves Kalume",
      role: "Trotamundos – 25 años, Bruselas",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      quote: "GrooveNomad cambió completamente mi manera de viajar. En pocos minutos, tenía un viaje completo y totalmente adaptado a mis deseos.",
    },
    {
      name: "Yucel Faruksahan",
      role: "Fiestero curioso – 23 años, Burdeos",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      quote: "Solo respondimos a 3 preguntas en el chat, ¡y boom!: el viaje perfecto. Festival increíble, alojamiento cool, buenos sitios de comida recomendados. ¡Aprobado! 🔥",
    },
    {
      name: "Anonymous author",
      role: "Primer festival en el extranjero – 21 años",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      quote: "Tenía algo de miedo de lanzarme solo, pero GrooveNomad lo facilitó todo. Descubrí un festival que nunca habría encontrado por mi cuenta.",
    },
    {
      name: "Shekinah Tshiokufila",
      role: "Amante de ambientes alternativos – 26 años, Nantes",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      quote: "El servicio es súper humano y fluido. El viaje propuesto fue genial e incluso las opciones alrededor del festival estaban pensadas para mí.",
    },
    {
      name: "Oketa Fred",
      role: "Equipo de road trip – 24 años, Lille",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote: "Simplemente la mejor manera de viajar para un festival. El chat es top, las recomendaciones son fiables, y ahorras mucho tiempo.",
    },
    {
      name: "Zeki",
      role: "Amante del electro – 29 años, Berlín",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      quote: "GrooveNomad es como un amigo que conoce todos los buenos planes y lo organiza todo por ti. Me encantó el enfoque personalizado.",
    },
    {
      name: "Joseph Kitheka",
      role: "Viajero solo – 30 años, Barcelona",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      quote: "Lo probé para un festival en Portugal y fue perfecto. Conocí a mucha gente allí y todo estaba organizado sin estrés.",
    },
    {
      name: "Khatab Wedaa",
      role: "Organizador de corazón – 28 años, Rennes",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      quote: "Normalmente me gusta planificar todo, pero esta vez me dejé llevar. Y sinceramente, fue incluso mejor que si lo hubiera hecho yo mismo.",
    },
    {
      name: "Rodrigo Aguilar",
      role: "Fan del live & backpack – 25 años, Lisboa",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      quote: "¿La mejor parte? La mezcla entre música y descubrimiento local. Sentí que vivía un verdadero viaje, no solo un festival.",
    },
    {
      name: "Eric Ampire",
      role: "Viaje entre amigos – 23 años, Montreal",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      quote: "Un gran flechazo. Pudimos viajar en grupo de 5, sin complicaciones, y vivir un festival de locura. Lo recomiendo a todos.",
    },
    {
      name: "Roland Tubonge",
      role: "Descubrimiento total – 22 años, Lyon",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      quote: "Pensaba que solo iba a ir de fiesta… pero fue mucho más que eso. Un viaje rico, fácil de organizar y súper bien pensado.",
    },
  ]
};

export default function WallOfLoveSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as "fr" | "en";
  const tData = testimonials[locale];
  const testimonialChunks = chunkArray(
    tData,
    Math.ceil(tData.length / 3)
  );
  return (
    <section id="avis">
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">
              {t("title")}
            </h2>
            <p className="text-body mt-6">
              {t("subtitle")}
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((testimonial, i) => (
              <div key={i} className="space-y-3">
                {testimonial.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
