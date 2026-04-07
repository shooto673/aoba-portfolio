export const navigationItems = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  eyebrow: "Photography / Forest / Life",
  title: "Aoba",
  statement: "森と生活のあわいで、\nやわらかな温度を写す。",
  description:
    "A portfolio shaped with quiet margins, natural light, and the nearness of soil, trees, and lived time.",
} as const;

export const aboutContent = {
  eyebrow: "Living with soil, learning from the forest",
  poem: `農とともに暮らし、写真を始める。
現在は森について学びながら、撮り続けている。

距離を確かめながら、
温度が滲む瞬間を写す。

愛農学園 → 東京農業大学`,
  description:
    "商業的な強さよりも、作品の呼吸と人の気配が先に届くように。Aoba の背景と今のまなざしを、そのまま余白の中へ置きました。",
} as const;

// Replace these placeholder URLs when the real contact details are ready.
export const contactLinks = [
  {
    label: "Instagram",
    eyebrow: "Social",
    href: "https://instagram.com/aoba",
    note: "@aoba",
    external: true,
  },
  {
    label: "Email",
    eyebrow: "Direct",
    href: "mailto:hello@aoba-photo.com",
    note: "hello@aoba-photo.com",
    external: false,
  },
] as const;

export const siteMetadata = {
  name: "Aoba",
  title: "Aoba | Photography / Forest / Life",
  description:
    "農とともに暮らし、森を学びながら撮り続ける写真家 Aoba のポートフォリオサイト。静かな余白とともに、作品と背景を届けます。",
  keywords: [
    "Aoba",
    "photographer",
    "portfolio",
    "forest photography",
    "nature photography",
    "Japan",
    "写真家",
    "ポートフォリオ",
    "森",
    "生活",
  ],
  ogImage: {
    src: "/images/site/flowers/flowers-01.jpg",
    width: 5568,
    height: 3132,
    alt: "Aoba portfolio cover image",
  },
} as const;

