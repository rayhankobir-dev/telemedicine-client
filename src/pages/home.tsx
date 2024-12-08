import { Helmet } from "react-helmet";
import CtaSection from "@/components/home/cta";
import HeroSection from "@/components/home/hero";
import CtaMenuSection from "@/components/home/cta-menu";
import ProductCategorySection from "@/components/home/product-category";

function HomePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MedInfo | Healthcare and Medicine</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HeroSection />
      <CtaMenuSection />
      <ProductCategorySection />
      <CtaSection />
    </>
  );
}

export default HomePage;
