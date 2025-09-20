"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl text-amber-900 font-serif">Jose Manuel</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Order
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('order')}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-amber-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('order')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
              >
                Order
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('order')}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}