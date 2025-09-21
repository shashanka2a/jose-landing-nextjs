"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WeeklyMenu() {
  const [activeCategory, setActiveCategory] = useState("Tortillas");

  const menuItems = [
    // TORTILLAS
    {
      name: "Tortilla de Patatas",
      description: "Classic Spanish potato omelet with eggs, potatoes, and caramelized onion - thick and creamy",
      price: "Individual: $8 | Medium: $15 | Large: $18",
      image: "https://images.unsplash.com/photo-1607877200978-3cab430e00cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwdG9ydGlsbGElMjBwb3RhdG98ZW58MXx8fHwxNzU4Mzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Classic", "Vegetarian"],
      category: "Tortillas"
    },
    {
      name: "Tortilla Española",
      description: "Traditional Spanish omelet with eggs, potatoes, onion, chorizo, and piquillo pepper",
      price: "Individual: $10 | Medium: $17 | Large: $25",
      image: "https://images.unsplash.com/photo-1607877200978-3cab430e00cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwdG9ydGlsbGElMjBwb3RhdG98ZW58MXx8fHwxNzU4Mzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Traditional", "Popular"],
      category: "Tortillas"
    },
    {
      name: "Tortilla del Huerto",
      description: "Garden tortilla with eggs, potatoes, bell pepper, and asparagus",
      price: "Individual: $8 | Medium: $14 | Large: $20",
      image: "https://images.unsplash.com/photo-1607877200978-3cab430e00cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwdG9ydGlsbGElMjBwb3RhdG98ZW58MXx8fHwxNzU4Mzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vegetarian", "Fresh"],
      category: "Tortillas"
    },
    // PAELLAS & RICE
    {
      name: "Paella Mar y Tierra",
      description: "Sea and land paella with rice, saffron, bell pepper, peas, seafood assortment, mixed meats, and chorizo",
      price: "$22 per serving",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwcGFlbGxhJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTgzNjE1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Premium", "Mixed"],
      category: "Paellas"
    },
    {
      name: "Paella del Mar",
      description: "Seafood paella with rice, saffron, bell pepper, shrimp, octopus, cod, seafood assortment, and peas",
      price: "$20 per serving",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwc2VyaW91cyUyMHBhZWxsYXxlbnwxfHx8fDE3NTgzNzU2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Seafood", "Premium"],
      category: "Paellas"
    },
    {
      name: "Paella Cazadora",
      description: "Hunter's paella with rice, saffron, bell pepper, peas, pork, chicken, beef, and chorizo",
      price: "$16 per serving",
      image: "https://images.unsplash.com/photo-1746587293135-7a59f5764cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwcGFlbGxhJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTgzNjE1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Meat", "Traditional"],
      category: "Paellas"
    },
    {
      name: "Paella del Huerto",
      description: "Garden paella with rice, saffron, bell pepper, peas, green beans, asparagus, and artichokes",
      price: "$15 per serving",
      image: "https://images.unsplash.com/photo-1746587293135-7a59f5764cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwcGFlbGxhJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTgzNjE1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vegetarian", "Fresh"],
      category: "Paellas"
    },
    {
      name: "Arroz con Pollo",
      description: "Chicken rice with saffron, bell pepper, paprika, peas, vegetable coloring, chicken thigh and breast (2 pieces per person)",
      price: "$14 per serving",
      image: "https://images.unsplash.com/photo-1746587293135-7a59f5764cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwcGFlbGxhJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTgzNjE1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Chicken", "Traditional"],
      category: "Paellas"
    },
    // PLATOS DE OLLA (POT DISHES)
    {
      name: "Cocido Madrileño",
      description: "Madrid Stew with chickpeas, onion, white cabbage, carrot, pork rib, bacon, and serrano ham",
      price: "$12 per serving",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwc3RldyUyMGNoaWNrcGVhc3xlbnwxfHx8fDE3NTgzNzU2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Traditional", "Hearty"],
      category: "Pot Dishes"
    },
    {
      name: "Fabada Asturiana",
      description: "Asturian Bean Stew with beans, chorizo, pork rib, potato-chickpeas, onion, white cabbage, carrot, bacon, and serrano ham",
      price: "$14 per serving",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwYmVhbiUyMHN0ZXd8ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Traditional", "Hearty"],
      category: "Pot Dishes"
    },
    {
      name: "Champiñones al Ajillo",
      description: "Garlic Mushrooms sautéed with garlic and olive oil",
      price: "$10 per serving",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwbXVzaHJvb21zJTIwZ2FybGljfGVufDF8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vegetarian", "Garlic"],
      category: "Pot Dishes"
    },
    {
      name: "Gambas al Ajillo",
      description: "Garlic Shrimp with tender garlic, spicy paprika, and olive oil",
      price: "$15 per serving",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwc2hyaW1wJTIwZ2FybGljfGVufDF8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Seafood", "Garlic"],
      category: "Pot Dishes"
    },
    // DESSERTS
    {
      name: "Natillas",
      description: "Traditional Spanish custard dessert",
      price: "$8",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwY3VzdGFyZCUyMGRlc3NlcnR8ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Dessert", "Creamy"],
      category: "Desserts"
    },
    {
      name: "Crema Catalana",
      description: "Catalan Cream - Spanish version of crème brûlée",
      price: "$10",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwY3JlbWUlMjBicnVsZWV8ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Dessert", "Premium"],
      category: "Desserts"
    },
    {
      name: "Leche Nevada",
      description: "Snowy Milk - Spanish meringue dessert",
      price: "$6",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwbWVyaW5ndWUlMjBkZXNzZXJ0fGVufDF8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Dessert", "Light"],
      category: "Desserts"
    },
    // BEVERAGES
    {
      name: "Sangria",
      description: "Traditional Spanish red wine punch with fruits",
      price: "1L: $12 | 1 Gallon: $30",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwc2FuZ3JpYXxlbnwxfHx8fDE3NTgzNzU2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Beverage", "Traditional"],
      category: "Beverages"
    },
    {
      name: "Zurracapote",
      description: "Spanish punch similar to sangria with fruits and wine",
      price: "1L: $12 | 1 Gallon: $30",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwcHVuY2glMjBkcmlua3xlbnwxfHx8fDE3NTgzNzU2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Beverage", "Traditional"],
      category: "Beverages"
    },
    // TAPAS
    {
      name: "Ciento de Tapas",
      description: "One hundred tapas of choice including cheese, serrano ham, bell pepper, chorizo, fish, and shrimp",
      price: "$70",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwdGFwYXMlMjBzZWxlY3Rpb258ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Sharing", "Variety"],
      category: "Tapas"
    },
    // SANDWICHES
    {
      name: "Docena Bocadillos",
      description: "Dozen sandwiches of choice including cheese, ham, salmon, chorizo, turkey, chicken, and egg",
      price: "$25",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwc2FuZHdpY2hlcyUyMGJvY2FkaWxsb3N8ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Sharing", "Variety"],
      category: "Sandwiches"
    },
    // BAKED GOODS
    {
      name: "Empanada Gallega",
      description: "Galician empanada with caramelized onion, bell pepper, tomato, sardines or tuna, green olive, and hard-boiled egg",
      price: "6x10\": $9 | 9x12\": $16 | 13x13\": $30",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwZW1wYW5hZGF8ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Baked", "Traditional"],
      category: "Baked Goods"
    },
    {
      name: "Hornazo de Salamanca",
      description: "Salamanca hornazo with pork loin, Cantimpalo chorizo, Serrano ham, and piquillo pepper wrapped in dough",
      price: "6x10\": $12 | 9x12\": $22 | 13x13\": $35",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwaG9ybmF6b3xlbnwxfHx8fDE3NTgzNzU2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Baked", "Premium"],
      category: "Baked Goods"
    },
    // ADDITIONAL DISHES FROM PDF
    {
      name: "Espárragos con Pimientos",
      description: "Asparagus with peppers - fresh green asparagus topped with diced red and green bell peppers",
      price: "$12 per serving",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3BhcmFndXMlMjBwZXBwZXJzfGVufDF8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vegetarian", "Fresh"],
      category: "Vegetables"
    },
    {
      name: "Pechuga Pollo Salsa Almendras",
      description: "Chicken breast with almond sauce served with golden french fries",
      price: "$16 per serving",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYWxtb25kJTIwc2F1Y2V8ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Chicken", "Creamy"],
      category: "Main Dishes"
    },
    {
      name: "Gambas al Ajillo con Garbanzos",
      description: "Garlic shrimp with chickpeas in a rich broth with large shrimp",
      price: "$18 per serving",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaHJpbXAlMjBnYXJsaWMlMjBjaGlja3BlYXN8ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Seafood", "Garlic"],
      category: "Main Dishes"
    },
    {
      name: "Pulpo al Y Oli",
      description: "Octopus with aioli - tender octopus slices covered in thick creamy aioli sauce",
      price: "$20 per serving",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY3RvcHVzJTIwYWlvbGl8ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Seafood", "Premium"],
      category: "Main Dishes"
    },
    {
      name: "Empanada Gallega de Atún y Tomate",
      description: "Galician tuna and tomato empanada - golden pastry filled with tuna and tomato mixture",
      price: "6x10\": $9 | 9x12\": $16 | 13x13\": $30",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBhbmFkYSUyMHR1bmElMjB0b21hdG98ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Baked", "Seafood"],
      category: "Baked Goods"
    },
    {
      name: "Costilla de Res con Arroz al Azafrán",
      description: "Beef rib with saffron rice - tender beef rib pieces with yellow saffron rice and red bell peppers",
      price: "$18 per serving",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwcmliJTIwc2FmZnJvbiUyMHJpY2V8ZW58MXx8fHwxNzU4Mzc1NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Beef", "Rice"],
      category: "Main Dishes"
    }
  ];

  // Get unique categories
  const categories = [...new Set(menuItems.map(item => item.category))];
  

  const scrollToSection = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(`section-${category.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-4 font-serif">
            Complete Spanish Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Freshly prepared daily with authentic ingredients imported from Spain. 
            From traditional tortillas and paellas to hearty stews, desserts, and beverages.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => scrollToSection(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-amber-600 text-white hover:bg-amber-700"
                    : "border-amber-300 text-amber-700 hover:bg-amber-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        {categories.map((category) => {
          const categoryItems = menuItems.filter(item => item.category === category);
          return (
            <div
              key={category}
              id={`section-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl text-amber-900 mb-6 font-serif border-b-2 border-amber-200 pb-2">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        width={400}
                        height={192}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                      />
                      <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.price}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-amber-900 text-lg">{item.name}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-amber-100 text-amber-800 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All dishes serve 2-3 people. Perfect for FIU students and families!
          </p>
          <p className="text-sm text-gray-500">
            *Menu availability may vary based on ingredient freshness and seasonal selection
          </p>
        </div>
      </div>
    </section>
  );
}