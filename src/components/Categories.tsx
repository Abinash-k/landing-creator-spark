import { Button } from "./ui/button";

const categories = [
  { name: "Antique Statues", count: 82, image: "/lovable-uploads/d84a8f47-0439-4f82-8651-acdb2fc024b2.png" },
  { name: "Buddha Statues", count: 243, image: "/lovable-uploads/d84a8f47-0439-4f82-8651-acdb2fc024b2.png" },
  { name: "Ganesh Statues", count: 199, image: "/lovable-uploads/d84a8f47-0439-4f82-8651-acdb2fc024b2.png" },
  { name: "Garden Statues", count: 850, image: "/lovable-uploads/d84a8f47-0439-4f82-8651-acdb2fc024b2.png" },
  { name: "Hindu Statues", count: 650, image: "/lovable-uploads/d84a8f47-0439-4f82-8651-acdb2fc024b2.png" },
  { name: "Modern Statue", count: 175, image: "/lovable-uploads/d84a8f47-0439-4f82-8651-acdb2fc024b2.png" },
];

export const Categories = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Best Selling Categories</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p>({category.count})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};