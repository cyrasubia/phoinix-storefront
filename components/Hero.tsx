"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Leaf, Zap } from "lucide-react";

export default function Hero() {
  const trustBadges = [
    { icon: Shield, text: "GMP Certified" },
    { icon: Sparkles, text: "Third-Party Tested" },
    { icon: Leaf, text: "100% Natural" },
    { icon: Zap, text: "Made in USA" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-neutral-950">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-red-950/20 to-black" />
      
      {/* Decorative blobs - reduced on mobile */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-red-900/20 to-neutral-900/20 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #dc2626 1px, transparent 1px), linear-gradient(to bottom, #dc2626 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-20 lg:py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-950/50 border border-red-800/50 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
              <span className="text-xs sm:text-sm font-medium text-red-200">
                Science-Backed Wellness
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Transform Your
                <span className="block text-gradient mt-1 sm:mt-2">Wellness Journey</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Premium supplements and specialty coffee crafted for those who 
                refuse to settle. Clean ingredients, transparent sourcing, 
                <span className="text-red-500 font-medium"> real results.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine"
              >
                <Link href="/shop" className="flex items-center justify-center gap-2">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-neutral-700 hover:border-red-600 hover:bg-red-950/30 text-neutral-300 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Trust Badges - 2x2 grid on mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 pt-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.text}
                  className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-neutral-400"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-red-950 flex items-center justify-center flex-shrink-0">
                    <badge.icon className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                  </div>
                  <span className="font-medium whitespace-nowrap">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t border-neutral-800">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "100%", label: "Natural" },
                { value: "4.9", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative h-[350px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
            {/* Main decorative circle */}
            <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-red-900/30 via-neutral-900/30 to-red-950/20 animate-pulse-glow" />
            
            {/* Floating product cards */}
            <div className="relative z-10 animate-float">
              {/* Main product image */}
              <div className="relative w-56 h-72 sm:w-72 sm:h-96 lg:w-80 lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-red-600/20 bg-neutral-900 mx-auto border border-neutral-800">
                <Image
                  src="/flathead-valley-coffee.jpg"
                  alt="Flathead Valley Coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Product info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-neutral-700">
                    <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 sm:mb-1">Flathead Valley Coffee</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm mb-2 sm:mb-3">Medium-Dark Roast • 12oz</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg sm:text-xl font-bold text-white">$18.00</span>
                      <Link 
                        href="/products/flathead-valley-coffee"
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-semibold rounded-full transition-colors"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Small floating badge - adjusted for mobile */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-4 animate-float-delayed">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="h-7 w-7 sm:h-10 sm:w-10 rounded-full bg-red-950 flex items-center justify-center">
                    <Leaf className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-neutral-500">Organic</p>
                    <p className="text-xs sm:text-sm font-bold text-white">Certified</p>
                  </div>
                </div>
              </div>
              
              {/* Price tag - adjusted for mobile */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl shadow-xl px-3 py-2 sm:px-6 sm:py-4 animate-float" style={{ animationDelay: "-1s" }}>
                <p className="text-[10px] sm:text-xs text-neutral-500 mb-0.5 sm:mb-1">Starting at</p>
                <p className="text-lg sm:text-2xl font-bold text-gradient">$29.99</p>
              </div>
            </div>

            {/* Background decorative elements - hidden on small mobile */}
            <div className="hidden sm:block absolute top-10 right-10 w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-red-800/50 animate-pulse" />
            <div className="hidden sm:block absolute bottom-20 left-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-red-700/30 animate-pulse" style={{ animationDelay: "-1s" }} />
            <div className="hidden sm:block absolute top-1/3 left-0 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-red-600/40 animate-pulse" style={{ animationDelay: "-2s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
