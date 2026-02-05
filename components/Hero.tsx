"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Leaf, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const trustBadges = [
    { icon: Shield, text: "GMP Certified" },
    { icon: Sparkles, text: "Third-Party Tested" },
    { icon: Leaf, text: "100% Natural" },
    { icon: Zap, text: "Made in USA" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-emerald-50/30 to-teal-50/20" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #059669 1px, transparent 1px), linear-gradient(to bottom, #059669 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">
                Science-Backed Wellness
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1]">
                Transform Your
                <span className="block text-gradient mt-2">Wellness Journey</span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 max-w-lg leading-relaxed">
                Premium supplements and specialty coffee crafted for those who 
                refuse to settle. Clean ingredients, transparent sourcing, 
                <span className="text-emerald-600 font-medium"> real results.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine"
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
                className="border-2 border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-stone-700 font-semibold px-8 py-6 text-base transition-all duration-300"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-sm text-stone-600"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <badge.icon className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-stone-200">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "100%", label: "Natural" },
                { value: "4.9", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-stone-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main decorative circle */}
            <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-emerald-100/50 via-teal-100/30 to-emerald-50/20 animate-pulse-glow" />
            
            {/* Floating product cards */}
            <div className="relative z-10 animate-float">
              {/* Main product image placeholder with gradient */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 bg-gradient-to-br from-emerald-500 to-teal-600">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
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
                  <div className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    Shop Collection →
                  </div>
                </div>
                
                {/* Decorative elements on card */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 blur-lg" />
              </div>
              
              {/* Small floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500">Organic</p>
                    <p className="text-sm font-bold text-stone-900">Certified</p>
                  </div>
                </div>
              </div>
              
              {/* Price tag */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-6 py-4 animate-float" style={{ animationDelay: "-1s" }}>
                <p className="text-xs text-stone-500 mb-1">Starting at</p>
                <p className="text-2xl font-bold text-gradient">$29.99</p>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 rounded-full border-2 border-emerald-200/50 animate-pulse" />
            <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full bg-teal-200/30 animate-pulse" style={{ animationDelay: "-1s" }} />
            <div className="absolute top-1/3 left-0 w-8 h-8 rounded-full bg-emerald-300/40 animate-pulse" style={{ animationDelay: "-2s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
