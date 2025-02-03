import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { formatPrice } from "@/lib/utils";
import { redirectToWhatsApp } from "@/lib/whatsapp";

const Temples = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["temple-products"],
    queryFn: async () => {
      const { data: categoryData } = await supabase
        .from("categories")
        .select("id")
        .eq("name", "Temples")
        .single();

      if (!categoryData) return [];

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category_id", categoryData.id);

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-16">
            <p>Loading products...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-secondary mb-8">Temple Architecture</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {products?.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={item.image_url || "/placeholder.svg"}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </CardContent>
                <CardFooter className="p-6 border-t">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(item.price)}
                    </span>
                    <Button 
                      onClick={() => redirectToWhatsApp(item.name, item.price)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Buy on WhatsApp
                    </Button>
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

export default Temples;