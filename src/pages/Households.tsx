import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const Households = () => {
  const items = [
    {
      id: 1,
      name: "Decorative Wall Panel",
      description: "Intricately carved wall panel perfect for modern homes.",
      price: 15000,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      id: 2,
      name: "Stone Fountain",
      description: "Beautiful handcrafted fountain for gardens and courtyards.",
      price: 25000,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      id: 3,
      name: "Decorative Pillar",
      description: "Elegant stone pillar with traditional Indian motifs.",
      price: 35000,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-secondary mb-8">Household Sculptures</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 border-t">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(item.price)}
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

export default Households;