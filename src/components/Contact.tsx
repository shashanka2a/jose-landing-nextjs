"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, MessageCircle, Instagram } from "lucide-react";

export function Contact() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hola José! I have a question about Jose Manuel."
    );
    window.open(`https://wa.me/15616632564?text=${message}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/porobraygacia_', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-4 font-serif">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with Chef José for orders, catering, or questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <CardTitle className="text-amber-900">Service Area</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Miami-Dade County<br />
                FIU Campus & Coral Gables area<br />
                Free delivery within 5 miles
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Clock className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <CardTitle className="text-amber-900">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Tuesday - Sunday: 11 AM - 7 PM<br />
                Monday: Closed<br />
                Last orders 2 hours before closing
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <CardHeader>
              <Phone className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <CardTitle className="text-amber-900">Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                WhatsApp: +1 (561) 663-2564<br />
                Email: jose@porobraygacia.com<br />
                Instagram: @porobraygacia_
              </CardDescription>
              <div className="flex gap-3 justify-center">
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button 
                  onClick={handleInstagram}
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-50 flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl text-amber-900 mb-4 font-serif">Catering Available</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Planning a special event? José offers authentic Spanish catering services for 
            parties, corporate events, and celebrations. Contact us for custom menu options 
            and pricing.
          </p>
          <Button 
            onClick={handleWhatsApp}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
          >
            Inquire About Catering
          </Button>
        </div>
      </div>
    </section>
  );
}