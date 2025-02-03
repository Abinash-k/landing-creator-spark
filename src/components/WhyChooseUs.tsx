export const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Craftsmanship",
      description: "Over two decades of experience in creating exquisite sculptures with meticulous attention to detail."
    },
    {
      title: "Traditional Techniques",
      description: "We preserve ancient sculpting methods while incorporating modern aesthetics for timeless pieces."
    },
    {
      title: "Custom Solutions",
      description: "Tailored sculptures to meet your specific requirements and preferences."
    },
    {
      title: "Quality Materials",
      description: "Only the finest materials are used to ensure durability and lasting beauty."
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="p-6 bg-[#FDF6F0] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};