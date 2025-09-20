import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sofia Martinez",
      location: "FIU Student",
      text: "José's tortilla española reminds me of my abuela's cooking back home. Perfect comfort food during finals week!",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      location: "FIU Graduate Student",
      text: "The paella feeds my whole study group! José is so kind and the food is always fresh and delicious. Best value around campus.",
      rating: 5
    },
    {
      name: "Amanda Chen",
      location: "Coral Gables Neighbor",
      text: "Discovered José through my FIU friends and now I'm a regular! His passion for cooking really shows in every dish.",
      rating: 5
    },
    {
      name: "Miguel Santos",
      location: "FIU Student",
      text: "As a Venezuelan student, finding authentic Spanish food here is amazing. José's tapas selection is incredible!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-4 font-serif">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Authentic flavors that transport you straight to Spain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <p className="text-amber-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-md">
            <h3 className="text-xl text-amber-900 mb-4">Join Our Happy Customers</h3>
            <p className="text-gray-600 mb-6">
              Experience authentic Spanish flavors loved by FIU students and Miami locals alike.
            </p>
            <div className="flex justify-center items-center gap-2 text-amber-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-lg">4.9/5 from 100+ happy customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}