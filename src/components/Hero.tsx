import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#FDF6F0] overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-8 animate-fadeIn">
          <h1 className="text-5xl lg:text-7xl font-bold text-secondary">
            Exquisite Handcrafted Hindu God, Buddha, and Garden Statues
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Explore The Stone Studio's exquisite Garden statues, the divine beauty of Hindu God statues, and a serene sanctuary of mesmerising Buddha Statues.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            SHOP NOW →
          </Button>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="/lovable-uploads/afda5139-302c-455f-bd5a-fb246a844aaa.png"
            alt="Garden Buddha Statue"
            className="rounded-lg shadow-2xl animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          />
        </div>
      </div>
    </div>
  );
};