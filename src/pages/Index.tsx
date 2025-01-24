import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FoundersNote } from "@/components/FoundersNote";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <FoundersNote />
      <Footer />
    </div>
  );
};

export default Index;