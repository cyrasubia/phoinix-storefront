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
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description: "Non-GMO, organic sourcing with no artificial fillers, colors, or preservatives.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Award,
    title: "Third-Party Tested",
    description: "Independent lab verification for purity, potency, and safety on every batch.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on orders over $50. Delivered to your door in 2-3 days.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ShieldCheck,
    title: "30-Day Guarantee",
    description: "Not satisfied? Full refund within 30 days, no questions asked.",
    color: "from-rose-500 to-red-500",
  },
  {
    icon: HeartHandshake,
    title: "Sustainable Sourcing",
    description: "Ethically sourced ingredients with eco-friendly packaging and carbon-neutral shipping.",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function Features() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Why Choose <span className="text-gradient">Phoinix</span>
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            We&apos;re committed to delivering the highest quality wellness products 
            with transparency, sustainability, and your health in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-white border border-stone-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
