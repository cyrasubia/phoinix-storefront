import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Fitness Coach",
    image: "",
    content: "The quality of Phoinix supplements is unmatched. My clients have noticed real improvements in energy and recovery. I recommend them to everyone!",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Software Engineer",
    image: "",
    content: "Finally found a coffee that tastes amazing AND doesn't give me the jitters. The Morning Blend is now part of my daily ritual.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Yoga Instructor",
    image: "",
    content: "I love knowing exactly what's in my supplements. The transparency and quality control gives me peace of mind.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Quote className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-100">
              Customer Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Loved by <span className="text-gradient-gold">Thousands</span>
          </h2>
          <p className="text-lg text-stone-400 leading-relaxed">
            Join over 50,000 customers who have transformed their wellness journey with Phoinix.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-emerald-500/30" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-stone-300 leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-stone-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
            { value: "30+", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-stone-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
