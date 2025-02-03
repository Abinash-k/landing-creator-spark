import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const categories = [
  {
    name: "Hindu Gods",
    count: 650,
    image: "/lovable-uploads/0c09b932-2b93-4dad-8853-c96065773bde.png",
    route: "/hindu-gods"
  },
  {
    name: "Buddha Statues",
    count: 243,
    image: "/lovable-uploads/99f0a343-076a-4788-b40b-ae1b695b6fa2.png",
    route: "/buddhas"
  },
  {
    name: "Household Items",
    count: 175,
    image: "/lovable-uploads/e083d520-76dd-4f16-a68a-cd8584456333.png",
    route: "/households"
  }
];

export const Categories = () => {
  const navigate = useNavigate();

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
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(category.route)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p>({category.count} items)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};