import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { ImageAsset } from "@/data/photos";
import { aboutContent } from "@/data/site";

type AboutSectionProps = {
  photo: ImageAsset;
};

export function AboutSection({ photo }: AboutSectionProps) {
  return (
    <section className="section-frame" id="about">
      <SectionHeading
        description="プロフィールを説明としてではなく、Aoba の現在地が静かに立ち上がる短い詩として組んでいます。"
        eyebrow="About"
        title="A life close to the soil, still learning from the forest"
      />

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(17rem,23rem)_minmax(0,1fr)] lg:gap-12">
        <figure className="paper-panel overflow-hidden p-3 sm:p-4">
          <Image
            alt={photo.alt}
            className="h-auto w-full rounded-[1.35rem] object-contain"
            height={photo.height}
            sizes="(min-width: 1024px) 24rem, 100vw"
            src={photo.src}
            width={photo.width}
          />
          <figcaption className="px-2 pb-1 pt-4 text-[0.7rem] uppercase tracking-[0.28em] text-muted">
            Portrait
          </figcaption>
        </figure>

        <div className="paper-panel p-7 sm:p-10 lg:p-12">
          <p className="section-kicker">{aboutContent.eyebrow}</p>
          <div className="mt-8 whitespace-pre-line font-serif text-[clamp(1.45rem,3.1vw,2.8rem)] leading-[1.95] tracking-[0.04em] text-foreground">
            {aboutContent.poem}
          </div>
          <p className="mt-8 max-w-xl text-sm leading-7 text-muted sm:text-base">
            {aboutContent.description}
          </p>
        </div>
      </div>
    </section>
  );
}

