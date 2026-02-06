import { Star, Quote } from "lucide-react";

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
    <section className="py-16 sm:py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-800/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-950/50 border border-red-900/30 mb-4 sm:mb-6">
            <Quote className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
            <span className="text-xs sm:text-sm font-medium text-red-200">
              Customer Stories
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-white">
            Loved by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Join over 50,000 customers who have transformed their wellness journey with Phoinix.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 text-center sm:text-left"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 h-6 w-6 sm:h-8 sm:w-8 text-red-500/20" />

              {/* Stars */}
              <div className="flex items-center justify-center sm:justify-start gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-red-500 text-red-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 border-t border-neutral-800 pt-8 sm:pt-12">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
            { value: "30+", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
