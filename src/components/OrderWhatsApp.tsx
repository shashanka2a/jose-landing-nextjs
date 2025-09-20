"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageCircle, Clock, Truck } from "lucide-react";

export function OrderWhatsApp() {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      "Hola José! I'd like to place an order for Por Obra Y Gracia. Could you please share today's available menu?"
    );
    window.open(`https://wa.me/13054567890?text=${message}`, '_blank');
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-br from-amber-900 to-amber-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-4 font-serif">
          Easy Ordering
        </h2>
        <p className="text-lg text-amber-100 mb-12 max-w-2xl mx-auto">
          Simple WhatsApp ordering with free delivery to FIU campus and surrounding areas. 
          No apps, no fees - just message José directly!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <CardTitle>Easy Ordering</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-amber-100">
                Message José directly to check daily availability and place your order
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <CardTitle>Fresh Daily</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-amber-100">
                All dishes prepared fresh to order. 2-3 hours advance notice recommended
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <CardTitle>Free Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-amber-100">
                Free delivery to FIU campus and within 5 miles of Coral Gables
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h3 className="text-xl text-white mb-4">Order Hours</h3>
          <div className="text-amber-100 space-y-2">
            <p><span className="font-medium">Tuesday - Sunday:</span> 11:00 AM - 7:00 PM</p>
            <p><span className="font-medium">Monday:</span> Closed</p>
            <p className="text-sm mt-4">Last orders accepted 2 hours before closing</p>
          </div>
        </div>

        <Button 
          size="lg" 
          onClick={handleWhatsAppOrder}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg flex items-center gap-3 mx-auto"
        >
          <MessageCircle className="w-5 h-5" />
          Order on WhatsApp
        </Button>
        
        <p className="text-amber-200 mt-4 text-sm">
          Click to open WhatsApp and start your order
        </p>
      </div>
    </section>
  );
}