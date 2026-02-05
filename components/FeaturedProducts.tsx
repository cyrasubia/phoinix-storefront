import { getProducts } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

export default async function FeaturedProducts() {
  const products = await getProducts();

  return (
    <section className="py-20 sm:py-28 bg-stone-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 mb-6">
            <Package className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">
              Curated Selection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Discover our handpicked collection of premium supplements and specialty coffee, 
            each crafted to support your transformation journey.
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {products.slice(0, 8).map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          /* Demo Products (when no Shopify connection) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {demoProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/50 font-semibold px-8"
          >
            <Link href="/shop" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Demo products for when Shopify is not connected
const demoProducts = [
  {
    id: "demo-1",
    title: "Phoinix Rise Morning Blend",
    handle: "phoinix-rise-morning-blend",
    description: "A bold, energizing coffee blend with notes of chocolate and caramel. Perfect for starting your day with intention.",
    priceRange: {
      minVariantPrice: {
        amount: "24.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-1",
            title: "Default",
            availableForSale: true,
          },
        },
      ],
    },
  },
  {
    id: "demo-2",
    title: "Vitality Greens Powder",
    handle: "vitality-greens-powder",
    description: "45+ superfoods in one scoop. Organic greens, adaptogens, and probiotics for daily vitality.",
    priceRange: {
      minVariantPrice: {
        amount: "49.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-2",
            title: "Default",
            availableForSale: true,
          },
        },
      ],
    },
  },
  {
    id: "demo-3",
    title: "Omega-3 Elite Fish Oil",
    handle: "omega-3-elite-fish-oil",
    description: "Pharmaceutical-grade omega-3s from wild-caught fish. Supports heart, brain, and joint health.",
    priceRange: {
      minVariantPrice: {
        amount: "34.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-3",
            title: "Default",
            availableForSale: true,
          },
        },
      ],
    },
  },
  {
    id: "demo-4",
    title: "Sleep & Recovery Complex",
    handle: "sleep-recovery-complex",
    description: "Natural sleep aid with magnesium, L-theanine, and melatonin. Wake up refreshed and restored.",
    priceRange: {
      minVariantPrice: {
        amount: "39.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-4",
            title: "Default",
            availableForSale: true,
          },
        },
      ],
    },
  },
];
