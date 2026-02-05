import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Target, Heart, Leaf, Award, Users, Globe, Zap } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-b from-emerald-50/50 to-white py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Transforming Lives Through <span className="text-gradient">Wellness</span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              Phoinix was born from a simple belief: everyone deserves access to premium, 
              science-backed wellness products that actually work. Founded in 2020, we've 
              helped over 50,000 customers transform their health journeys.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="py-12 bg-stone-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "100%", label: "Natural Ingredients" },
                { value: "30+", label: "Countries Served" },
                { value: "4.9/5", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</p>
                  <p className="text-stone-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-stone-600">
                These principles guide everything we do, from product development to customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description: "To empower individuals on their wellness journey with transparent, effective products that deliver real results.",
                },
                {
                  icon: Heart,
                  title: "Our Passion",
                  description: "We're obsessed with quality. Every ingredient is meticulously sourced and every formula is rigorously tested.",
                },
                {
                  icon: Leaf,
                  title: "Our Promise",
                  description: "Sustainability isn't optional. From eco-friendly packaging to ethical sourcing, we put the planet first.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center p-8 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-6">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{value.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                  Why Choose <span className="text-gradient">Phoinix</span>?
                </h2>
                <p className="text-lg text-stone-600 mb-8">
                  In a market flooded with supplements making empty promises, we stand apart 
                  through our commitment to transparency, quality, and customer satisfaction.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Award,
                      title: "Third-Party Tested",
                      description: "Every batch is independently verified for purity and potency.",
                    },
                    {
                      icon: Globe,
                      title: "Sustainable Sourcing",
                      description: "We partner with ethical suppliers who share our values.",
                    },
                    {
                      icon: Users,
                      title: "Expert Formulated",
                      description: "Our products are developed with nutritionists and scientists.",
                    },
                    {
                      icon: Zap,
                      title: "Fast Shipping",
                      description: "Orders ship within 24 hours. Free shipping on orders over $50.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-900">{feature.title}</h3>
                        <p className="text-stone-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl">
                      <svg
                        className="h-16 w-16 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">The Phoinix Difference</h3>
                    <p className="text-stone-600">Science-backed wellness for everyone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Join thousands of customers who have transformed their wellness routines with Phoinix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Shop Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-stone-200 text-stone-700 font-semibold text-lg hover:border-emerald-300 hover:bg-emerald-50 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
