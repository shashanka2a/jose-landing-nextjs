import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WeeklyMenu() {
  const menuItems = [
    {
      name: "Paella Valenciana",
      description: "Traditional saffron rice with chicken, rabbit, and green beans",
      price: "$28",
      image: "https://images.unsplash.com/photo-1746587293135-7a59f5764cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwcGFlbGxhJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTgzNjE1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Traditional", "Gluten-Free"],
      category: "Paellas"
    },
    {
      name: "Paella de Mariscos",
      description: "Seafood paella with shrimp, mussels, calamari, and fresh fish",
      price: "$32",
      image: "https://images.unsplash.com/photo-1746587293135-7a59f5764cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwcGFlbGxhJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTgzNjE1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Seafood", "Premium"],
      category: "Paellas"
    },
    {
      name: "Tortilla Española",
      description: "Classic Spanish potato omelet, thick and creamy",
      price: "$15",
      image: "https://images.unsplash.com/photo-1607877200978-3cab430e00cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwdG9ydGlsbGElMjBwb3RhdG98ZW58MXx8fHwxNzU4Mzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vegetarian", "Popular"],
      category: "Tortillas"
    },
    {
      name: "Tortilla de Espinacas",
      description: "Spinach and cheese tortilla with fresh herbs",
      price: "$16",
      image: "https://images.unsplash.com/photo-1607877200978-3cab430e00cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwdG9ydGlsbGElMjBwb3RhdG98ZW58MXx8fHwxNzU4Mzc1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vegetarian", "Fresh"],
      category: "Tortillas"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-4 font-serif">
            Tortillas & Paellas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Freshly prepared daily with authentic ingredients imported from Spain. 
            José specializes in these two traditional Spanish dishes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
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
                <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full">
                  {item.price}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-amber-900">{item.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-amber-100 text-amber-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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