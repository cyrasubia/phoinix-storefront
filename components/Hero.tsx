"use client";

import Link from "next/link";
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
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-900/20 to-neutral-900/20 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #dc2626 1px, transparent 1px), linear-gradient(to bottom, #dc2626 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">
              <Sparkles className="h-4 w-4 text-neutral-400" />
              <span className="text-sm font-medium text-neutral-300">
                Science-Backed Wellness
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Transform Your
                <span className="block text-white mt-2">Wellness Journey</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-400 max-w-lg leading-relaxed">
                Premium supplements and specialty coffee crafted for those who 
                refuse to settle. Clean ingredients, transparent sourcing, 
                <span className="text-white font-medium"> real results.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine"
              >
                <Link href="/shop" className="flex items-center gap-2">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900 text-neutral-300 font-semibold px-8 py-6 text-base transition-all duration-300"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-sm text-neutral-400"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    <badge.icon className="h-4 w-4 text-neutral-400" />
                  </div>
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-neutral-800">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "100%", label: "Natural" },
                { value: "4.9", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main decorative circle */}
            <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-red-900/30 via-neutral-900/30 to-red-950/20 animate-pulse-glow" />
            
            {/* Floating product cards */}
            <div className="relative z-10 animate-float">
              {/* Main product image placeholder with gradient */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-red-600/20 bg-gradient-to-br from-red-600 to-red-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                    <svg
                      className="h-12 w-12 text-white"
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
                  <h3 className="text-2xl font-bold mb-2">Phoinix Rise</h3>
                  <p className="text-white/80 text-sm">Premium Morning Blend</p>
                  <div className="mt-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold">
                    Shop Collection →
                  </div>
                </div>
                
                {/* Decorative elements on card */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 blur-lg" />
              </div>
              
              {/* Small floating badge */}
              <div className="absolute -top-4 -right-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-neutral-400" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Organic</p>
                    <p className="text-sm font-bold text-white">Certified</p>
                  </div>
                </div>
              </div>
              
              {/* Price tag */}
              <div className="absolute -bottom-4 -left-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl px-6 py-4 animate-float" style={{ animationDelay: "-1s" }}>
                <p className="text-xs text-neutral-500 mb-1">Starting at</p>
                <p className="text-2xl font-bold text-gradient">$29.99</p>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 rounded-full border-2 border-red-800/50 animate-pulse" />
            <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full bg-red-700/30 animate-pulse" style={{ animationDelay: "-1s" }} />
            <div className="absolute top-1/3 left-0 w-8 h-8 rounded-full bg-red-600/40 animate-pulse" style={{ animationDelay: "-2s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
