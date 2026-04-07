import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteMetadata } from "@/data/site";

// Replace metadataBase with the production domain once it is decided.
export const metadata: Metadata = {
  metadataBase: new URL("https://aoba-portfolio.example"),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  keywords: [...siteMetadata.keywords],
  applicationName: siteMetadata.name,
  authors: [{ name: siteMetadata.name }],
  creator: siteMetadata.name,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: siteMetadata.name,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.ogImage.src,
        width: siteMetadata.ogImage.width,
        height: siteMetadata.ogImage.height,
        alt: siteMetadata.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage.src],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ec",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
