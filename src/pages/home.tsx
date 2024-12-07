import HeroSection from "@/components/home/hero";
import CtaMenuSection from "@/components/home/cta-menu";
import ProductCategorySection from "@/components/home/product-category";
import CtaSection from "@/components/home/cta";

function HomePage() {
  return (
    <>
      <HeroSection />
      <CtaMenuSection />
      <ProductCategorySection />
      <CtaSection />
    </>
  );
}

export default HomePage;
