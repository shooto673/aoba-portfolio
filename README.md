# Aoba Portfolio

写真家 Aoba のための、静かな余白を持つポートフォリオサイトです。Next.js App Router + TypeScript + Tailwind CSS で構成しています。

## Directory structure

```text
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── hero.tsx
│   ├── lightbox.tsx
│   ├── section-heading.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   └── works-section.tsx
├── data
│   ├── photos.ts
│   └── site.ts
├── public
│   └── images
│       └── site
│           ├── daily
│           ├── flowers
│           ├── profile
│           └── travel
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Photo replacement

1. 実写真を [`/Users/suzukishuto/Downloads/Aoba web/public/images/site`](/Users/suzukishuto/Downloads/Aoba%20web/public/images/site) 配下へ置きます。
2. 対応する `src`, `width`, `height` を [`/Users/suzukishuto/Downloads/Aoba web/data/photos.ts`](/Users/suzukishuto/Downloads/Aoba%20web/data/photos.ts) で更新します。
3. 連絡先や SEO の文言は [`/Users/suzukishuto/Downloads/Aoba web/data/site.ts`](/Users/suzukishuto/Downloads/Aoba%20web/data/site.ts) で差し替えます。

## Notes

- 写真一覧は `data/photos.ts` の配列で管理しています。
- ライトボックスはキーボードの `Esc`, `←`, `→` に対応しています。
- `metadataBase`, Instagram, Email はプレースホルダーなので公開前に差し替えてください。
