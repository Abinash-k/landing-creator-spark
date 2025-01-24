import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FoundersNote } from "@/components/FoundersNote";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <FoundersNote />
      <Footer />
    </div>
  );
};

export default Index;