import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-secondary mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you. Please fill out the form below and we'll get back to you
                as soon as possible.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea placeholder="Your message" className="h-32" />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Visit Our Studio</h2>
              <div className="bg-[#FDF6F0] p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-secondary">Address</h3>
                    <p className="text-gray-600">
                      #86, Vasanthapuri Estate<br />
                      3rd Main Road<br />
                      Chengalpattu District<br />
                      Tamil Nadu
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Contact</h3>
                    <p className="text-gray-600">
                      Phone: +91 7305971450<br />
                      Email: abinashsculptures@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;