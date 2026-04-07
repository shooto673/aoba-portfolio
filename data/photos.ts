export type PhotoCategory = "flowers" | "daily" | "travel";

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Photo = ImageAsset & {
  id: string;
  category?: PhotoCategory;
  series?: string;
  seriesLabel: string;
};

export type PhotoSeries = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  photos: Photo[];
};

type PhotoSeed = readonly [src: string, width: number, height: number];

const createPhotos = (
  category: PhotoCategory,
  series: string,
  seriesLabel: string,
  seeds: readonly PhotoSeed[],
): Photo[] =>
  seeds.map(([src, width, height], index) => {
    const order = String(index + 1).padStart(2, "0");

    return {
      id: `${category}-${order}`,
      src,
      alt: `Aoba ${series.toLowerCase()} photograph ${order}`,
      width,
      height,
      category,
      series,
      seriesLabel,
    };
  });

// Replace photo files by updating the matching file in /public/images/site
// and then syncing the src / width / height values here.
const flowerPhotoSeeds = [
  ["/images/site/flowers/flowers-01.jpg", 5568, 3132],
  ["/images/site/flowers/flowers-02.jpg", 2333, 3500],
  ["/images/site/flowers/flowers-03.jpg", 4032, 6048],
  ["/images/site/flowers/flowers-04.jpg", 4032, 6048],
  ["/images/site/flowers/flowers-05.jpg", 6048, 4032],
  ["/images/site/flowers/flowers-06.jpg", 3495, 5242],
  ["/images/site/flowers/flowers-07.jpg", 3712, 5568],
  ["/images/site/flowers/flowers-08.jpg", 1620, 1080],
  ["/images/site/flowers/flowers-09.jpg", 3000, 2000],
  ["/images/site/flowers/flowers-10.jpg", 5568, 3712],
  ["/images/site/flowers/flowers-11.jpg", 2000, 3000],
  ["/images/site/flowers/flowers-12.jpg", 3000, 2000],
  ["/images/site/flowers/flowers-13.jpg", 3712, 5568],
  ["/images/site/flowers/flowers-14.jpg", 5568, 3712],
  ["/images/site/flowers/flowers-15.jpg", 2333, 3500],
  ["/images/site/flowers/flowers-16.jpg", 2836, 3545],
  ["/images/site/flowers/flowers-17.jpg", 3508, 2328],
  ["/images/site/flowers/flowers-18.jpg", 2688, 4032],
  ["/images/site/flowers/flowers-19.png", 1080, 1350],
  ["/images/site/flowers/flowers-20.jpg", 3712, 5568],
] as const satisfies readonly PhotoSeed[];

const dailyPhotoSeeds = [
  ["/images/site/daily/daily-01.jpg", 5568, 3712],
  ["/images/site/daily/daily-02.jpg", 1080, 1620],
  ["/images/site/daily/daily-03.jpg", 3712, 5568],
  ["/images/site/daily/daily-04.jpg", 3811, 5716],
  ["/images/site/daily/daily-05.jpg", 4032, 6048],
  ["/images/site/daily/daily-06.jpg", 2333, 3500],
  ["/images/site/daily/daily-07.jpg", 1080, 1620],
  ["/images/site/daily/daily-08.jpg", 2333, 3500],
  ["/images/site/daily/daily-09.jpg", 2000, 3000],
  ["/images/site/daily/daily-10.jpg", 5568, 3712],
  ["/images/site/daily/daily-11.jpg", 2000, 3000],
  ["/images/site/daily/daily-12.jpg", 2000, 3000],
  ["/images/site/daily/daily-13.jpg", 2000, 3000],
  ["/images/site/daily/daily-14.jpg", 1080, 1620],
  ["/images/site/daily/daily-15.jpg", 3712, 5568],
  ["/images/site/daily/daily-16.jpg", 3000, 2000],
  ["/images/site/daily/daily-17.jpg", 3000, 2000],
  ["/images/site/daily/daily-18.jpg", 2000, 3000],
  ["/images/site/daily/daily-19.jpg", 2000, 3000],
  ["/images/site/daily/daily-20.jpg", 1080, 1620],
] as const satisfies readonly PhotoSeed[];

const travelPhotoSeeds = [
  ["/images/site/travel/travel-01.jpg", 1080, 1620],
  ["/images/site/travel/travel-02.jpg", 1440, 960],
  ["/images/site/travel/travel-03.jpeg", 3500, 2333],
  ["/images/site/travel/travel-04.jpg", 3712, 5568],
  ["/images/site/travel/travel-05.jpg", 3712, 5568],
  ["/images/site/travel/travel-06.jpg", 2000, 3000],
  ["/images/site/travel/travel-07.jpg", 1620, 1080],
  ["/images/site/travel/travel-08.jpg", 3616, 5424],
  ["/images/site/travel/travel-09.jpg", 3331, 4996],
  ["/images/site/travel/travel-10.jpg", 1901, 1069],
  ["/images/site/travel/travel-11.jpg", 3000, 2000],
  ["/images/site/travel/travel-12.jpg", 2000, 3000],
  ["/images/site/travel/travel-13.jpg", 2000, 3000],
  ["/images/site/travel/travel-14.jpg", 3712, 5568],
  ["/images/site/travel/travel-15.jpg", 2000, 3000],
  ["/images/site/travel/travel-16.jpg", 3000, 2000],
  ["/images/site/travel/travel-17.jpg", 2333, 3500],
  ["/images/site/travel/travel-18.jpg", 3000, 2000],
  ["/images/site/travel/travel-19.jpg", 3500, 2333],
  ["/images/site/travel/travel-20.jpg", 3712, 5568],
] as const satisfies readonly PhotoSeed[];

const flowerPhotos = createPhotos("flowers", "Flowers", "花 / Flowers", flowerPhotoSeeds);
const dailyPhotos = createPhotos("daily", "Daily", "日常 / Daily", dailyPhotoSeeds);
const travelPhotos = createPhotos("travel", "Travel", "旅 / Travel", travelPhotoSeeds);

export const heroPhoto = flowerPhotos[0];

export const profilePhoto: ImageAsset = {
  src: "/images/site/profile/aoba-profile-01.jpg",
  alt: "Aoba portrait",
  width: 2039,
  height: 3059,
};

export const photoSeries: PhotoSeries[] = [
  {
    id: "flowers",
    eyebrow: "Series 01",
    title: "花",
    description:
      "土の湿りや季節の移ろいが、色のやわらかな揺れとして残るシリーズ。近さの中にある静けさを中心に置いています。",
    photos: flowerPhotos,
  },
  {
    id: "daily",
    eyebrow: "Series 02",
    title: "日常",
    description:
      "生活のなかに沈んでいる温度を拾い上げるための断片。身近な風景が、少しだけ時間を止めたように見えるまとまりです。",
    photos: dailyPhotos,
  },
  {
    id: "travel",
    eyebrow: "Series 03",
    title: "旅",
    description:
      "移動しながら出会う光や距離感を、その場の空気ごと受け止めるシリーズ。見知らぬ場所にも生活の気配を探しています。",
    photos: travelPhotos,
  },
];

export const allPhotos = photoSeries.flatMap((series) => series.photos);

