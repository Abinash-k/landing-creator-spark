export const WhatWeProvide = () => {
  const services = [
    {
      title: "Custom Sculptures",
      description: "Personalized statues crafted to your specifications and requirements."
    },
    {
      title: "Temple Installations",
      description: "Complete temple statue installation services with proper rituals and setup."
    },
    {
      title: "Restoration Services",
      description: "Expert restoration of old and damaged sculptures to their former glory."
    },
    {
      title: "Consultation",
      description: "Professional guidance on selecting the perfect statue for your space."
    }
  ];

  return (
    <div className="bg-[#FDF6F0] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">What We Provide</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};