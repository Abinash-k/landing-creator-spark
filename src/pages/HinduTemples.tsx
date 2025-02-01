import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const HinduTemples = () => {
  const temples = [
    {
      id: 1,
      name: "Traditional Temple Design",
      description: "Exquisite architectural details inspired by ancient Hindu temples. Our designs incorporate traditional elements while maintaining modern functionality.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
    },
    {
      id: 2,
      name: "Contemporary Temple Architecture",
      description: "Modern interpretations of classic Hindu temple architecture, perfect for urban settings and contemporary spaces.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-secondary mb-8">Hindu Temple Architecture</h1>
          <div className="grid md:grid-cols-2 gap-12">
            {temples.map((temple) => (
              <Card key={temple.id} className="overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-4">
                    {temple.name}
                  </h3>
                  <p className="text-gray-600">
                    {temple.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HinduTemples;