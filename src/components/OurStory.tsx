import { Heart, Users, MapPin } from "lucide-react";

export function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-4 font-serif">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From family traditions to Miami tables - a journey of passion, 
            community, and authentic Spanish flavors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl text-amber-900 mb-3 font-serif">Family Roots</h3>
            <p className="text-gray-600">
              Every recipe comes from generations of family tradition. José learned these 
              techniques from his grandmother in Spain, preserving authentic flavors and methods 
              that have been perfected over decades.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl text-amber-900 mb-3 font-serif">FIU Community</h3>
            <p className="text-gray-600">
              What started as cooking for friends quickly grew into serving FIU students 
              craving authentic, home-cooked meals. José found joy in bringing comfort food 
              to students missing home and locals seeking genuine Spanish cuisine.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl text-amber-900 mb-3 font-serif">Miami Dreams</h3>
            <p className="text-gray-600">
              After retiring from engineering, José decided to turn his passion into purpose. 
              Starting his own food brand in Miami, he now brings the warmth of Spanish 
              hospitality directly to your doorstep.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl text-amber-900 mb-4 font-serif">
                &ldquo;Por Obra Y Gracia&rdquo;
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Our name means &ldquo;by work and grace&rdquo; - reflecting José&apos;s belief that great food 
                comes from both dedicated craftsmanship and the blessing of sharing meals 
                with others.
              </p>
              <p className="text-gray-600">
                Every dish is prepared with the same care José would use for his own family, 
                because that&apos;s exactly what our customers have become - part of the Por Obra Y Gracia family.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl text-amber-600 mb-2">500+</div>
                <p className="text-gray-600 mb-4">Happy customers served</p>
                <div className="text-3xl text-amber-600 mb-2">3</div>
                <p className="text-gray-600">Years serving Miami</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}