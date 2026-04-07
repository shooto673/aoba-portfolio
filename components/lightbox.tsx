"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Photo } from "@/data/photos";

type LightboxProps = {
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  photos: Photo[];
};

export function Lightbox({
  activeIndex,
  onClose,
  onNext,
  onPrevious,
  photos,
}: LightboxProps) {
  useEffect(() => {
    if (activeIndex < 0) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, onClose, onNext, onPrevious]);

  if (activeIndex < 0) {
    return null;
  }

  const photo = photos[activeIndex];

  return (
    <div
      aria-label={`${photo.alt} lightbox`}
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[rgba(16,14,12,0.92)] px-3 py-3 backdrop-blur-sm sm:px-5 sm:py-5"
      onClick={onClose}
      role="dialog"
    >
      <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between gap-2 sm:gap-5">
        <button
          aria-label="Previous photo"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/35 hover:text-white md:inline-flex"
          onClick={(event) => {
            event.stopPropagation();
            onPrevious();
          }}
          type="button"
        >
          ←
        </button>

        <div
          className="flex min-h-0 flex-1 items-center justify-center"
          onClick={(event) => event.stopPropagation()}
        >
          <figure className="flex w-full max-w-[1320px] flex-col items-center gap-4">
            <div className="relative flex max-h-[78vh] w-full items-center justify-center">
              <Image
                alt={photo.alt}
                className="max-h-[78vh] w-auto max-w-full object-contain"
                height={photo.height}
                priority
                sizes="100vw"
                src={photo.src}
                width={photo.width}
              />
            </div>

            <figcaption className="flex w-full flex-col gap-3 border-t border-white/10 pt-4 text-white/75 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-serif text-xl text-white/95">{photo.seriesLabel}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.28em] text-white/55">
                  {photo.category}
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/60">
                {String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
              </p>
            </figcaption>
          </figure>
        </div>

        <button
          aria-label="Next photo"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/35 hover:text-white md:inline-flex"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          type="button"
        >
          →
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between sm:inset-x-5 sm:top-5">
        <div className="pointer-events-auto flex gap-2 md:hidden">
          <button
            aria-label="Previous photo"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            type="button"
          >
            ←
          </button>
          <button
            aria-label="Next photo"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            type="button"
          >
            →
          </button>
        </div>

        <button
          aria-label="Close lightbox"
          className="pointer-events-auto ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/35 hover:text-white"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          type="button"
        >
          ×
        </button>
      </div>
    </div>
  );
}

