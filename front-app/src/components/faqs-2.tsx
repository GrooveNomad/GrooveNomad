import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsTwo() {
  const faqItems = [
    {
      id: "item-1",
      question: "C’est quoi GrooveNomad ?",
      answer:
        "GrooveNomad est une plateforme qui t’aide à organiser ton voyage autour des meilleurs festivals du monde. On te propose des expériences tout-en-un : billets, hébergement, transport et découvertes locales — le tout personnalisé selon tes envies.",
    },
    {
      id: "item-2",
      question: "Est-ce que GrooveNomad vend les billets de festival ?",
      answer:
        "Non, on ne vend pas directement les billets de festival. En revanche, on t’indique où les acheter et on te guide dans la démarche pour que tu ne rates pas ta place ! On t’aide aussi à construire tout ce qu’il y a autour : transport, hébergement, bons plans, etc.",
    },
    {
      id: "item-3",
      question: "Puis-je personnaliser totalement mon voyage ?",
      answer:
        "Oui, c’est le cœur de notre mission. Tu peux choisir ton mode de transport, ton type d’hébergement (auberge, camping, hôtel…), ajouter des options culturelles ou festives, et même construire ton séjour avec notre assistant IA si tu veux un coup de main.",
    },
    {
      id: "item-4",
      question: "GrooveNomad fonctionne-t-il partout dans le monde ?",
      answer:
        "On se concentre d’abord sur les festivals en Europe et quelques grands événements internationaux comme Coachella ou Burning Man. Mais on enrichit régulièrement nos destinations grâce aux suggestions de la communauté.",
    },
    {
      id: "item-5",
      question: "C’est gratuit d’utiliser GrooveNomad ?",
      answer:
        "Oui, notre assistant et la plateforme sont gratuits pour les utilisateurs. Si tu passes par nous pour réserver ton transport ou hébergement, on prend une petite commission auprès de nos partenaires, pas sur ton dos.",
    },
    {
      id: "item-6",
      question: "Je voyage seul·e, est-ce que c’est adapté ?",
      answer:
        "Complètement ! On t’aide à te sentir à l’aise en solo, et tu peux même rejoindre des groupes de festivaliers qui partent sur la même destination. Une façon de rencontrer du monde dès le départ !",
    },
    {
      id: "item-7",
      question: "Proposez-vous des packs tout inclus ?",
      answer:
        "Oui, certains festivals partenaires proposent des offres packagées avec hébergement + transport + activités. Tu peux aussi construire ton propre pack avec notre assistant intelligent.",
    },
    {
      id: "item-8",
      question: "Est-ce que GrooveNomad organise des voyages de groupe ?",
      answer:
        "On ne gère pas (encore) les voyages de groupe en tant qu’agence, mais on te permet de créer un itinéraire partagé et de réserver ensemble. Parfait pour partir avec tes potes sans galérer à tout organiser.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Foire aux questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Tu te poses des questions sur GrooveNomad ? On y répond ici ! Et si
            tu ne trouves pas ta réponse, contacte-nous directement, on est
            super réactifs.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
