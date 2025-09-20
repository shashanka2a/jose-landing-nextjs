"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutJose } from "@/components/AboutJose";
import { WeeklyMenu } from "@/components/WeeklyMenu";
import { OrderWhatsApp } from "@/components/OrderWhatsApp";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="about">
        <AboutJose />
      </div>
      <WeeklyMenu />
      <OrderWhatsApp />
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
