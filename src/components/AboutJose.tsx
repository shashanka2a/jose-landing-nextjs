import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutJose() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl text-amber-900 mb-6 font-serif">
              Meet José
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                José specializes in two authentic Spanish dishes: traditional tortillas and paellas. 
                His family recipes have been passed down through generations, each technique learned 
                at his grandmother&apos;s side in Spain.
              </p>
              <p>
                From the perfect saffron-to-rice ratio in paella to the creamy texture of authentic 
                tortilla española, José brings decades of tradition to every dish. He takes pride in 
                serving the FIU community and Miami locals with these two signature specialties.
              </p>
              <p>
                Every tortilla and paella is prepared with the same care José would use for his own 
                family, bringing authentic Spanish flavors straight from his kitchen to your table.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723240906605-1f0ed36b5efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHBhZWxsYXxlbnwxfHx8fDE3NTgzNzU2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef José cooking paella"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                width={400}
                height={384}
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}