import { AboutSection } from "../components/about";
import { ContactSection } from "../components/contact";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { InsightsSection } from "../components/insights";
import { PortfolioSection } from "../components/portfolio";
import { ServicesSection } from "../components/services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
