import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Target, Heart, Leaf, Award, Users, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-950/50 border border-red-900/30 mb-4 sm:mb-6">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
              <span className="text-xs sm:text-sm font-medium text-red-200">Our Story</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Transforming Lives Through <span className="text-gradient">Wellness</span>
            </h1>
            <p className="text-base sm:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
              Phoinix was born from a simple belief: everyone deserves access to premium, 
              science-backed wellness products that actually work. Founded in 2020, we've 
              helped over 50,000 customers transform their health journeys.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="py-10 sm:py-12 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "100%", label: "Natural Ingredients" },
                { value: "30+", label: "Countries Served" },
                { value: "4.9/5", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1 sm:mb-2">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-neutral-400">
                These principles guide everything we do, from product development to customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
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
                <div key={value.title} className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 shadow-sm hover:border-neutral-700 transition-colors">
                  <div className="inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br from-red-600 to-red-800 shadow-lg mb-4 sm:mb-6">
                    <value.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-16 sm:py-20 bg-neutral-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Why Choose <span className="text-gradient">Phoinix</span>?
                </h2>
                <p className="text-base sm:text-lg text-neutral-400 mb-6 sm:mb-8">
                  In a market flooded with supplements making empty promises, we stand apart 
                  through our commitment to transparency, quality, and customer satisfaction.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
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
                    <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-red-950 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm sm:text-base">{feature.title}</h3>
                        <p className="text-neutral-400 text-xs sm:text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-red-900/20 to-neutral-900 flex items-center justify-center border border-neutral-800">
                  <div className="text-center p-6 sm:p-8">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-2xl">
                      <svg
                        className="h-10 w-10 sm:h-16 sm:w-16 text-white"
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
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">The Phoinix Difference</h3>
                    <p className="text-neutral-400 text-sm sm:text-base">Science-backed wellness for everyone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of customers who have transformed their wellness routines with Phoinix.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-neutral-700 text-neutral-300 font-semibold text-base sm:text-lg hover:border-red-600 hover:bg-red-950/30 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
