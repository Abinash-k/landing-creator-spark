import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#FDF6F0] overflow-hidden">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-8 animate-fadeIn lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight">
            Exquisite Handcrafted Hindu God, Buddha, and Garden Statues
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Explore Abinash Sculptures' exquisite Garden statues, the divine beauty of Hindu God statues, and a serene sanctuary of mesmerising Buddha Statues.
          </p>
          <Link to="/products">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              EXPLORE NOW →
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 animate-fadeIn">
          <div className="relative w-full max-w-lg mx-auto">
            <img
              src="/lovable-uploads/60d301e5-3a78-446f-9d72-17e9cced340c.png"
              alt="Lord Ganesha Statue"
              className="w-full h-auto rounded-lg shadow-2xl"
              style={{
                maxHeight: "600px",
                objectFit: "cover",
              }}
            />
            <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};