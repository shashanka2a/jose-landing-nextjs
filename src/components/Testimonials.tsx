import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "FIU Student",
      text: "Finally found real Spanish food in Miami! The tortilla is exactly like what I had in Madrid. José is so friendly and always remembers my order.",
      rating: 5
    },
    {
      name: "David K.",
      location: "Coral Gables Resident",
      text: "Ordered the paella for a dinner party and everyone loved it. Fresh ingredients and authentic taste. Will definitely order again!",
      rating: 5
    },
    {
      name: "Maria L.",
      location: "FIU Graduate",
      text: "Been ordering from José for months now. The croquetas are incredible and the delivery is always on time. Highly recommend!",
      rating: 4
    },
    {
      name: "James R.",
      location: "Local Business Owner",
      text: "Great food at reasonable prices. The gazpacho is perfect for Miami weather. José's customer service is top-notch.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-2 font-serif">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Authentic flavors that transport you straight to Spain
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none]" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* hide scrollbar for WebKit */}
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="min-w-[280px] sm:min-w-[340px] md:min-w-[420px] snap-start bg-white shadow-md hover:shadow-lg transition-shadow">
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
        </div>
      </div>
    </section>
  );
}