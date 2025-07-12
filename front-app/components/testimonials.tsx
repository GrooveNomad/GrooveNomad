import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Jonathan Yombo',
    role: 'Fan de techno – 27 ans, Lyon',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    quote: "C’est la première fois que je me sens autant compris pour organiser un voyage. L’outil est simple, rapide, et j’ai vécu un festival incroyable grâce à eux.",
  },
  {
    name: 'Yves Kalume',
    role: 'Globe-trotter – 25 ans, Bruxelles',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    quote: "GrooveNomad a clairement changé ma manière de voyager. En quelques minutes, j’avais un séjour complet et totalement aligné avec mes envies.",
  },
  {
    name: 'Yucel Faruksahan',
    role: 'Fêtard curieux – 23 ans, Bordeaux',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    quote: "On a juste répondu à 3 questions dans le chat, et boom : le voyage parfait. Festival au top, logement stylé, bon spot food recommandé. Validé 🔥",
  },
  {
    name: 'Anonymous author',
    role: 'Premier festival à l’étranger – 21 ans',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    quote: "J’avais un peu peur de me lancer seul, mais GrooveNomad m’a tout facilité. J’ai découvert un festival que je n’aurais jamais trouvé moi-même.",
  },
  {
    name: 'Shekinah Tshiokufila',
    role: 'Amatrice d’ambiances alternatives – 26 ans, Nantes',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    quote: "Le service est hyper humain et fluide. Le séjour proposé était canon et même les options autour du festival étaient pensées pour moi.",
  },
  {
    name: 'Oketa Fred',
    role: 'Team road trip – 24 ans, Lille',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    quote: "C’est tout simplement la meilleure façon de voyager pour un festival. Le chat est top, les reco sont fiables, et on gagne un temps fou.",
  },
  {
    name: 'Zeki',
    role: 'Électro lover – 29 ans, Berlin',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    quote: "GrooveNomad, c’est comme un pote qui connaît tous les bons plans et qui organise tout pour toi. J’ai adoré l’approche sur-mesure.",
  },
  {
    name: 'Joseph Kitheka',
    role: 'Voyageur solo – 30 ans, Barcelone',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    quote: "J’ai testé pour un festival au Portugal et c’était parfait. J’ai rencontré plein de monde sur place et tout était calé en amont sans stress.",
  },
  {
    name: 'Khatab Wedaa',
    role: 'Organisateur dans l’âme – 28 ans, Rennes',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    quote: "J’aime bien tout planifier d’habitude, mais là j’ai lâché prise. Et franchement, c’était mieux que si je l’avais fait moi-même.",
  },
  {
    name: 'Rodrigo Aguilar',
    role: 'Fan de live & backpack – 25 ans, Lisbonne',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    quote: "La meilleure partie ? Le mix entre musique et découverte locale. J’ai eu l’impression de vivre un vrai trip, pas juste un festival.",
  },
  {
    name: 'Eric Ampire',
    role: 'Voyage entre potes – 23 ans, Montréal',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    quote: "Gros coup de cœur. On a pu voyager à 5, sans se prendre la tête, et vivre un festival de folie. Je recommande à tout le monde.",
  },
  {
    name: 'Roland Tubonge',
    role: 'Découverte totale – 22 ans, Lyon',
    image: 'https://randomuser.me/api/portraits/men/13.jpg',
    quote: "Je pensais juste partir faire la fête… mais c’était bien plus que ça. Un voyage riche, simple à organiser et super bien pensé.",
  }
]


const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">Ils en parlent mieux que nous.</h2>
                        <p className="text-body mt-6">Des voyages qui marquent, des souvenirs gravés. Voici ce que pensent nos premiers GrooveNomads.</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div
                                key={chunkIndex}
                                className="space-y-3">
                                {chunk.map(({ name, role, quote, image }, index) => (
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

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
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
    )
}
