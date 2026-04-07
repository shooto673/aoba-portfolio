"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/lightbox";
import { SectionHeading } from "@/components/section-heading";
import type { PhotoSeries } from "@/data/photos";

type WorksSectionProps = {
  series: PhotoSeries[];
};

export function WorksSection({ series }: WorksSectionProps) {
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null);

  const allPhotos = series.flatMap((group) => group.photos);
  const activeIndex = activePhotoId
    ? allPhotos.findIndex((photo) => photo.id === activePhotoId)
    : -1;

  const openLightbox = (photoId: string) => setActivePhotoId(photoId);
  const closeLightbox = () => setActivePhotoId(null);
  const showPrevious = () =>
    setActivePhotoId((current) => {
      if (!current) {
        return null;
      }

      const currentIndex = allPhotos.findIndex((photo) => photo.id === current);
      const previousIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;

      return allPhotos[previousIndex]?.id ?? null;
    });
  const showNext = () =>
    setActivePhotoId((current) => {
      if (!current) {
        return null;
      }

      const currentIndex = allPhotos.findIndex((photo) => photo.id === current);
      const nextIndex = (currentIndex + 1) % allPhotos.length;

      return allPhotos[nextIndex]?.id ?? null;
    });

  return (
    <section className="section-frame" id="works">
      <SectionHeading
        description="花、日常、旅。それぞれの気配を分けながらも、ひとつの呼吸として見えるように構成しています。写真の縦横比はそのままに、静かな間で並べました。"
        eyebrow="Works"
        title="Photographs held with air, distance, and light"
      />

      <div className="mt-12 space-y-20 lg:mt-16 lg:space-y-28">
        {series.map((group) => (
          <article
            className="grid gap-8 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-12"
            key={group.id}
          >
            <div className="xl:sticky xl:top-28 xl:self-start">
              <p className="section-kicker">{group.eyebrow}</p>
              <h3 className="mt-4 font-serif text-[clamp(2rem,3vw,3.2rem)] leading-none tracking-[0.03em] text-foreground">
                {group.title}
              </h3>
              <p className="mt-5 max-w-xs text-sm leading-7 text-muted sm:text-base">
                {group.description}
              </p>
            </div>

            <div className="masonry-grid mt-1">
              {group.photos.map((photo, index) => (
                <button
                  className="masonry-item group block w-full text-left"
                  key={photo.id}
                  onClick={() => openLightbox(photo.id)}
                  type="button"
                >
                  <span className="paper-panel block overflow-hidden p-2">
                    <Image
                      alt={photo.alt}
                      className="h-auto w-full rounded-[1.1rem] object-contain transition duration-500 group-hover:scale-[1.01]"
                      height={photo.height}
                      loading="lazy"
                      sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
                      src={photo.src}
                      width={photo.width}
                    />
                  </span>
                  <span className="mt-3 flex items-center justify-between px-1 text-[0.64rem] uppercase tracking-[0.28em] text-muted">
                    <span>{group.title}</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </span>
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      <Lightbox
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrevious={showPrevious}
        photos={allPhotos}
      />
    </section>
  );
}

