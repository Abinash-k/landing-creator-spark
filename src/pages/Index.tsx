import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FoundersNote } from "@/components/FoundersNote";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WhatWeProvide } from "@/components/WhatWeProvide";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <WhyChooseUs />
      <WhatWeProvide />
      <FoundersNote />
      <Footer />
    </div>
  );
};

export default Index;