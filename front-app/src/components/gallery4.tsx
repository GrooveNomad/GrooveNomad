"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/src/components/ui/button";
import type { CarouselApi } from "@/src/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export interface Gallery4Item {
  title: string;
  desc: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: any;
}

const Gallery4 = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  const t = useTranslations("gallery");
  const locale = useLocale();
  const safeLocale = locale === "fr" || locale === "en" || locale === "es" ? locale : "fr";

  const galleryContent = {
  "fr": {
    festivals: [
      {
        title: "🪩 Tomorrowland – Belgique",
        desc: "Un des plus grands festivals électro au monde, connu pour ses scènes spectaculaires, son ambiance féerique et une line-up légendaire dans une petite ville belge.",
        href: "https://www.tomorrowland.com",
        image: "https://prismic-assets-cdn.tomorrowland.com/aG-GtUMqNJQqHvz3_16_9.png?crop=2880,2160,480,0&width=1440&height=1080"
      },
      {
        title: "🌇 Sónar – Barcelone, Espagne",
        desc: "Festival de musique électronique, art numérique et innovation technologique au cœur de Barcelone. L’événement incontournable des amateurs de culture futuriste.",
        href: "https://sonar.es",
        image: "https://sonar.es/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpro-cms-bucket%2FHiro_Galerias_2_d5f9b0a08b%2FHiro_Galerias_2_d5f9b0a08b.png&w=3840&q=75"
      },
      {
        title: "🌴 Coachella – Californie, USA",
        desc: "Un des festivals les plus médiatisés au monde. Mode, pop culture et line-ups légendaires dans le désert californien, sous le soleil de l’Empire Polo Club.",
        href: "https://www.coachella.com",
        image: "https://api.time.com/wp-content/uploads/2020/03/coachella-festival.jpg"
      },
      {
        title: "🔥 Burning Man – Black Rock Desert, USA",
        desc: "Plus qu’un festival, un laboratoire de création artistique et d’expérimentation humaine dans le désert du Nevada. Radicalité, liberté et feux de joie garantis.",
        href: "https://burningman.org",
        image: "https://venga-store.com/cdn/shop/articles/burning_man_2025_2_6f9a1e58-1f1b-48b2-a1c0-14d31ececfcc.webp?v=1742839610"
      },
      {
        title: "🌍 Afrikaburn – Afrique du Sud",
        desc: "Version africaine du Burning Man, Afrikaburn t’invite à une immersion artistique totale dans le désert du Tankwa Karoo. Créativité radicale et esprit collectif.",
        href: "https://www.afrikaburn.org",
        image: "https://im8hoursahead.com/wp-content/uploads/2017/06/lalala_3265-1-819x1024.jpg"
      },
      {
        title: "🌄 Meadows in the Mountains – Bulgarie",
        desc: "Un festival perché dans les montagnes bulgares, où la nature, la musique alternative et l’esprit communautaire se mélangent au lever du soleil.",
        href: "https://www.meadowsinthemountains.com",
        image: "https://www.vmcdn.ca/f/files/elorafergustoday/images/20230603mfestkk9.jpg;w=960"
      }
    ]
  },
  "en": {
    festivals: [
      {
        title: "🪩 Tomorrowland – Belgium",
        desc: "One of the world’s largest electronic festivals, famous for its spectacular stages, magical atmosphere, and legendary line-up in a small Belgian town.",
        href: "https://www.tomorrowland.com",
        image: "https://prismic-assets-cdn.tomorrowland.com/aG-GtUMqNJQqHvz3_16_9.png?crop=2880,2160,480,0&width=1440&height=1080"
      },
      {
        title: "🌇 Sónar – Barcelona, Spain",
        desc: "Electronic music festival, digital art and tech innovation in the heart of Barcelona. The must for futuristic culture lovers.",
        href: "https://sonar.es",
        image: "https://sonar.es/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpro-cms-bucket%2FHiro_Galerias_2_d5f9b0a08b%2FHiro_Galerias_2_d5f9b0a08b.png&w=3840&q=75"
      },
      {
        title: "🌴 Coachella – California, USA",
        desc: "One of the world’s most hyped festivals. Fashion, pop culture, and legendary line-ups in the Californian desert, under the sun at the Empire Polo Club.",
        href: "https://www.coachella.com",
        image: "https://api.time.com/wp-content/uploads/2020/03/coachella-festival.jpg"
      },
      {
        title: "🔥 Burning Man – Black Rock Desert, USA",
        desc: "More than a festival, a laboratory of artistic creation and human experiment in the Nevada desert. Radicality, freedom, and bonfires guaranteed.",
        href: "https://burningman.org",
        image: "https://venga-store.com/cdn/shop/articles/burning_man_2025_2_6f9a1e58-1f1b-48b2-a1c0-14d31ececfcc.webp?v=1742839610"
      },
      {
        title: "🌍 Afrikaburn – South Africa",
        desc: "The African version of Burning Man, Afrikaburn invites you to a total artistic immersion in the Tankwa Karoo desert. Radical creativity and community spirit.",
        href: "https://www.afrikaburn.org",
        image: "https://im8hoursahead.com/wp-content/uploads/2017/06/lalala_3265-1-819x1024.jpg"
      },
      {
        title: "🌄 Meadows in the Mountains – Bulgaria",
        desc: "A festival perched in the Bulgarian mountains, where nature, alternative music and community spirit blend at sunrise.",
        href: "https://www.meadowsinthemountains.com",
        image: "https://www.vmcdn.ca/f/files/elorafergustoday/images/20230603mfestkk9.jpg;w=960"
      }
    ]
  },
  "es": {
    festivals: [
      {
        title: "🪩 Tomorrowland – Bélgica",
        desc: "Uno de los festivales de electrónica más grandes del mundo, conocido por sus escenarios espectaculares, ambiente mágico y un cartel legendario en un pequeño pueblo belga.",
        href: "https://www.tomorrowland.com",
        image: "https://prismic-assets-cdn.tomorrowland.com/aG-GtUMqNJQqHvz3_16_9.png?crop=2880,2160,480,0&width=1440&height=1080"
      },
      {
        title: "🌇 Sónar – Barcelona, España",
        desc: "Festival de música electrónica, arte digital e innovación tecnológica en el corazón de Barcelona. El evento imprescindible para los amantes de la cultura futurista.",
        href: "https://sonar.es",
        image: "https://sonar.es/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpro-cms-bucket%2FHiro_Galerias_2_d5f9b0a08b%2FHiro_Galerias_2_d5f9b0a08b.png&w=3840&q=75"
      },
      {
        title: "🌴 Coachella – California, EE.UU.",
        desc: "Uno de los festivales más mediáticos del mundo. Moda, cultura pop y carteles legendarios en el desierto californiano, bajo el sol del Empire Polo Club.",
        href: "https://www.coachella.com",
        image: "https://api.time.com/wp-content/uploads/2020/03/coachella-festival.jpg"
      },
      {
        title: "🔥 Burning Man – Black Rock Desert, EE.UU.",
        desc: "Más que un festival, un laboratorio de creación artística y experimentación humana en el desierto de Nevada. Radicalidad, libertad y hogueras garantizadas.",
        href: "https://burningman.org",
        image: "https://venga-store.com/cdn/shop/articles/burning_man_2025_2_6f9a1e58-1f1b-48b2-a1c0-14d31ececfcc.webp?v=1742839610"
      },
      {
        title: "🌍 Afrikaburn – Sudáfrica",
        desc: "La versión africana del Burning Man, Afrikaburn te invita a una inmersión artística total en el desierto del Tankwa Karoo. Creatividad radical y espíritu colectivo.",
        href: "https://www.afrikaburn.org",
        image: "https://im8hoursahead.com/wp-content/uploads/2017/06/lalala_3265-1-819x1024.jpg"
      },
      {
        title: "🌄 Meadows in the Mountains – Bulgaria",
        desc: "Un festival en las montañas búlgaras, donde la naturaleza, la música alternativa y el espíritu comunitario se mezclan al amanecer.",
        href: "https://www.meadowsinthemountains.com",
        image: "https://www.vmcdn.ca/f/files/elorafergustoday/images/20230603mfestkk9.jpg;w=960"
      }
    ]
  }
  };
  const data = galleryContent[safeLocale].festivals;

  return (
    <section
      id="experiences"
      className="py-32 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
    >
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="max-w-lg text-muted-foreground">{t("description")}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
            {data.map((item : Gallery4Item, index) => (
              <CarouselItem
                key={index}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1920} // grande valeur pour avoir de la qualité (ex: 1920 ou 1200)
                      height={1080}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,var(--primary)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
