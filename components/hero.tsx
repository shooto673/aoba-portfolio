import Image from "next/image";
import type { ImageAsset } from "@/data/photos";
import { heroContent } from "@/data/site";

type HeroProps = {
  photo: ImageAsset;
};

export function Hero({ photo }: HeroProps) {
  return (
    <section className="section-frame pt-6 sm:pt-10" aria-labelledby="hero-title">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-end lg:gap-12">
        <div className="order-2 lg:order-1">
          <figure className="paper-panel overflow-hidden p-3 sm:p-4">
            <Image
              alt={photo.alt}
              className="h-auto w-full rounded-[1.4rem] object-contain"
              height={photo.height}
              priority
              sizes="(min-width: 1024px) 68vw, 100vw"
              src={photo.src}
              width={photo.width}
            />
          </figure>
        </div>

        <div className="order-1 max-w-[28rem] lg:order-2 lg:pb-10">
          <p className="section-kicker">{heroContent.eyebrow}</p>
          <h1 className="mt-5 font-serif text-[clamp(3.2rem,7vw,7rem)] leading-[0.95] tracking-[0.04em] text-foreground" id="hero-title">
            {heroContent.title}
          </h1>
          <p className="mt-6 whitespace-pre-line font-serif text-[clamp(1.35rem,2vw,1.9rem)] leading-relaxed text-[rgba(31,27,23,0.92)]">
            {heroContent.statement}
          </p>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base">
            {heroContent.description}
          </p>
          <a
            className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted hover:text-foreground"
            href="#works"
          >
            View Works
            <span aria-hidden="true" className="text-base">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
