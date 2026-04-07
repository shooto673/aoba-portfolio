import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorksSection } from "@/components/works-section";
import { heroPhoto, photoSeries, profilePhoto } from "@/data/photos";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell" id="main">
        <Hero photo={heroPhoto} />
        <WorksSection series={photoSeries} />
        <AboutSection photo={profilePhoto} />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

