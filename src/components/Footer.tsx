"use client";

import Image from "next/image";
import { Heart, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
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
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.jpeg" 
                alt="Jose Manuel Logo" 
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-2xl font-serif">Jose Manuel</h3>
            </div>
            <p className="text-amber-200 mb-4">
              Authentic Spanish flavors delivered fresh. 
              Every dish crafted with love and precision.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleWhatsApp}
                className="text-amber-200 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
              <button 
                onClick={handleInstagram}
                className="text-amber-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <div className="space-y-2 text-amber-200">
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-white transition-colors"
              >
                Weekly Menu
              </button>
              <button 
                onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-white transition-colors"
              >
                Order Now
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-white transition-colors"
              >
                About José
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-amber-200">
              <p>WhatsApp: +1 (561) 663-2564</p>
              <p>Email: jose@josemanuel.com</p>
              <p>Service Area: Miami-Dade County</p>
              <p className="text-sm mt-4">
                Tuesday - Sunday: 11 AM - 7 PM<br />
                Monday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 fill-current text-red-400" /> by Chef José
          </p>
          <p className="text-sm mt-2">© 2025 Jose Manuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}