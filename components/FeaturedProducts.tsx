import { getProducts } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

export default async function FeaturedProducts() {
  const products = await getProducts();

  return (
    <section className="py-20 sm:py-28 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
            <Package className="h-4 w-4 text-neutral-400" />
            <span className="text-sm font-medium text-neutral-300">
              Curated Selection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
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
            {demoProducts.slice(0, 8).map((product, index) => (
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
            className="border-2 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 font-semibold px-8 text-neutral-300"
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

// Demo products for when Shopify is not connected - using real Phoinix product images
const demoProducts = [
  {
    id: "demo-1",
    title: "CoQ10 Ubiquinone",
    handle: "coq10-ubiquinone",
    description: "Antioxidant support for heart health and cellular energy production. 30 capsules.",
    priceRange: {
      minVariantPrice: {
        amount: "30.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/coq10.jpg",
            altText: "CoQ10 Ubiquinone Supplement",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-1",
            title: "30 Capsules",
            availableForSale: true,
          },
        },
      ],
    },
  },
  {
    id: "demo-2",
    title: "Omega-3 Fish Oil",
    handle: "omega-3-fish-oil",
    description: "Pharmaceutical-grade omega-3s from wild-caught fish. Supports heart, brain, and joint health.",
    priceRange: {
      minVariantPrice: {
        amount: "28.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/omega3.jpg",
            altText: "Omega-3 Fish Oil Supplement",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-2",
            title: "60 Softgels",
            availableForSale: true,
          },
        },
      ],
    },
  },
  {
    id: "demo-3",
    title: "5-HTP Supplement",
    handle: "5-htp-supplement",
    description: "Natural mood support and sleep aid. Promotes serotonin production for balanced wellness.",
    priceRange: {
      minVariantPrice: {
        amount: "24.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/5htp.jpg",
            altText: "5-HTP Supplement",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-3",
            title: "60 Capsules",
            availableForSale: true,
          },
        },
      ],
    },
  },
  {
    id: "demo-4",
    title: "Phoinix Whey Protein",
    handle: "phoinix-whey-protein",
    description: "Hydrolyzed whey protein isolate for lean muscle growth and recovery. 25g protein per serving.",
    priceRange: {
      minVariantPrice: {
        amount: "45.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/whey-protein.png",
            altText: "Phoinix Whey Protein Isolate",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-4",
            title: "2lb Container",
            availableForSale: true,
          },
        },
      ],
    },
  },
];
