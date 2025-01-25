import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const HinduTemples = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-secondary mb-8">Hindu Temple Architecture</h1>
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    [Temple Image {item}]
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Traditional Temple Design {item}
                  </h3>
                  <p className="text-gray-600">
                    Exquisite architectural details inspired by ancient Hindu temples.
                    Our designs incorporate traditional elements while maintaining modern functionality.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HinduTemples;