import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Buddhas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-secondary mb-8">Buddha Statues</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    [Placeholder Image]
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Meditation Buddha {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A beautiful statue representing peace and tranquility.
                  </p>
                  <div className="text-primary font-semibold">$299.99</div>
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

export default Buddhas;