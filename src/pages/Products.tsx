import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { formatPrice } from "@/lib/utils";
import { redirectToWhatsApp } from "@/lib/whatsapp";
import { useState } from "react";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, categories(name)");
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FDF6F0]">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading products...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF6F0]">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-secondary">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div 
                className="aspect-square relative cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image_url || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {product.categories?.name}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 flex justify-between items-center">
                <span className="text-lg font-bold">{formatPrice(product.price)}</span>
                <Button 
                  onClick={() => redirectToWhatsApp(product.name, product.price)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Buy on WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-secondary">
                {selectedProduct?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square">
                <img
                  src={selectedProduct?.image_url || "/placeholder.svg"}
                  alt={selectedProduct?.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  {selectedProduct?.categories?.name}
                </p>
                <p className="text-gray-600">{selectedProduct?.description}</p>
                <div className="text-2xl font-bold text-primary">
                  {selectedProduct && formatPrice(selectedProduct.price)}
                </div>
                <Button 
                  onClick={() => {
                    if (selectedProduct) {
                      redirectToWhatsApp(selectedProduct.name, selectedProduct.price);
                    }
                  }}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Buy on WhatsApp
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
};

export default Products;