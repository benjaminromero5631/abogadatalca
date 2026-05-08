import Hero from "@/components/home/Hero";
import AreasGrid from "@/components/home/AreasGrid";
import SobreCatalina from "@/components/home/SobreCatalina";
import DefensaDeudores from "@/components/home/DefensaDeudores";
import ComoTrabajamos from "@/components/home/ComoTrabajamos";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTABand from "@/components/home/CTABand";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AreasGrid />
      <SobreCatalina />
      <DefensaDeudores />
      <ComoTrabajamos />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <CTABand />
    </>
  );
}
