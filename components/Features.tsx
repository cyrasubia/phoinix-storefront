import { 
  FlaskConical, 
  Leaf, 
  Award, 
  Truck, 
  ShieldCheck, 
  HeartHandshake 
} from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Science-Backed",
    description: "Every formula is developed with leading nutritionists and backed by peer-reviewed research.",
  },
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description: "Non-GMO, organic sourcing with no artificial fillers, colors, or preservatives.",
  },
  {
    icon: Award,
    title: "Third-Party Tested",
    description: "Independent lab verification for purity, potency, and safety on every batch.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on orders over $50. Delivered to your door in 2-3 days.",
  },
  {
    icon: ShieldCheck,
    title: "30-Day Guarantee",
    description: "Not satisfied? Full refund within 30 days, no questions asked.",
  },
  {
    icon: HeartHandshake,
    title: "Sustainable Sourcing",
    description: "Ethically sourced ingredients with eco-friendly packaging and carbon-neutral shipping.",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-neutral-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-6">
            Why Choose <span className="text-gradient">Phoinix</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            We&apos;re committed to delivering the highest quality wellness products 
            with transparency, sustainability, and your health in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 text-center sm:text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br from-red-600 to-red-800 shadow-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl sm:rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
