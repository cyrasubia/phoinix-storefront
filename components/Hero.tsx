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
      {/* Subtle gradient background only */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      
      {/* Single subtle accent glow - positioned behind product */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
      
      {/* Very subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(to right, #525252 1px, transparent 1px), linear-gradient(to bottom, #525252 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge - neutral */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">
              <Sparkles className="h-4 w-4 text-neutral-400" />
              <span className="text-sm font-medium text-neutral-300">
                Science-Backed Wellness
              </span>
            </div>

            {/* Headline - Clean white, no gradient */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Transform Your
                <span className="block mt-2">Wellness Journey</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-400 max-w-lg leading-relaxed">
                Premium supplements and specialty coffee crafted for those who 
                refuse to settle. Clean ingredients, transparent sourcing, 
                <span className="text-white font-medium"> real results.</span>
              </p>
            </div>

            {/* CTA Buttons - Red ONLY here */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-0.5"
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
                className="border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900 text-neutral-300 font-semibold px-8 py-6 text-base transition-all duration-300"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Trust Badges - Neutral colors */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-sm text-neutral-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    <badge.icon className="h-4 w-4 text-neutral-400" />
                  </div>
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Stats - White text, subtle styling */}
            <div className="flex items-center gap-8 pt-6 border-t border-neutral-900">
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
            {/* Single subtle glow behind product */}
            <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-red-900/5 blur-3xl" />
            
            {/* Floating product cards */}
            <div className="relative z-10 animate-float">
              {/* Main product card - Neutral dark, not red */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6">
                    <svg
                      className="h-12 w-12 text-neutral-300"
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
                  <h3 className="text-2xl font-bold mb-2 text-white">Phoinix Rise</h3>
                  <p className="text-neutral-400 text-sm">Premium Morning Blend</p>
                  <div className="mt-6 px-6 py-3 bg-neutral-800 border border-neutral-700 rounded-full text-sm font-semibold text-white">
                    Shop Collection →
                  </div>
                </div>
              </div>
              
              {/* Small floating badge - Neutral */}
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
              
              {/* Price tag - Neutral */}
              <div className="absolute -bottom-4 -left-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl px-6 py-4 animate-float" style={{ animationDelay: "-1s" }}>
                <p className="text-xs text-neutral-500 mb-1">Starting at</p>
                <p className="text-2xl font-bold text-white">$29.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
