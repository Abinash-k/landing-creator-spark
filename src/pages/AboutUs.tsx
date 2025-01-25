import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-secondary mb-8">About The Stone Studio</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                Welcome to The Stone Studio, where artistry meets spirituality. For over two decades, 
                we've been dedicated to crafting exquisite statues that bring peace and divine energy 
                to spaces around the world.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began with a simple vision: to create sacred art that resonates with both 
                the heart and soul. Today, we're proud to offer a diverse collection that speaks to 
                different spiritual paths and aesthetic preferences.
              </p>
              <p className="text-gray-600">
                Each piece in our collection is carefully handcrafted by our skilled artisans, 
                carrying forward ancient traditions while embracing modern aesthetics.
              </p>
            </div>
            <div className="bg-[#FDF6F0] p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">Craftsmanship:</span>
                  <span className="text-gray-600">Dedication to excellence in every detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">Authenticity:</span>
                  <span className="text-gray-600">Preserving traditional artistic methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">Spirituality:</span>
                  <span className="text-gray-600">Infusing divine energy into each creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;