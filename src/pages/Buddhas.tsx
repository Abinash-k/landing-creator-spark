import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const Buddhas = () => {
  const buddhaStatues = [
    {
      id: 1,
      name: "Meditation Buddha",
      description: "A serene Buddha statue in deep meditation pose, perfect for creating a peaceful atmosphere.",
      price: 25000,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
    },
    {
      id: 2,
      name: "Standing Buddha",
      description: "An elegant standing Buddha statue symbolizing grace and enlightenment.",
      price: 35000,
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
    },
    {
      id: 3,
      name: "Reclining Buddha",
      description: "A peaceful reclining Buddha statue representing serenity and nirvana.",
      price: 45000,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-secondary mb-8">Buddha Statues</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {buddhaStatues.map((statue) => (
              <Card key={statue.id} className="overflow-hidden">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={statue.image}
                    alt={statue.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {statue.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {statue.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 border-t">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(statue.price)}
                    </span>
                    <Button>Add to Cart</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Buddhas;