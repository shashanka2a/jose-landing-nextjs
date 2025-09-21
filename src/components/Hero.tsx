import Image from "next/image";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1746587293135-7a59f5764cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwcGFlbGxhJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTgzNjE1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Authentic Spanish Paella"
          className="w-full h-full object-cover"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-center mb-6">
            <Image 
              src="/logo.jpeg" 
              alt="Jose Manuel Logo" 
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover border-4 border-amber-200 shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-serif">
            Jose Manuel
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8">
            Authentic Spanish Cuisine from Jose Manuel&apos;s Kitchen
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Traditional Spanish dishes including tortillas, paellas, stews, desserts, and beverages crafted with passion and delivered fresh to FIU students and Miami locals.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-3 text-lg"
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}