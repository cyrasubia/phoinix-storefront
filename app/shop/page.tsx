import { getProducts } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Filter, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="flex min-h-screen flex-col bg-neutral-950">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-950/50 border border-red-900/30 mb-4 sm:mb-6">
                <Package className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
                <span className="text-xs sm:text-sm font-medium text-red-200">
                  All Products
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-6">
                Shop Our Collection
              </h1>
              <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed">
                Discover premium supplements and specialty coffee crafted for your wellness journey.
              </p>
            </div>
          </div>
        </div>

        {/* Filters & Products */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-neutral-800">
            <p className="text-xs sm:text-sm text-neutral-500">
              Showing {products.length > 0 ? products.length : demoProducts.length} products
            </p>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="outline" size="sm" className="gap-1.5 sm:gap-2 border-neutral-700 text-neutral-300 hover:bg-neutral-900 text-xs sm:text-sm">
                <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Filter
              </Button>
              <div className="hidden sm:flex items-center gap-1 border border-neutral-700 rounded-lg p-1">
                <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 bg-neutral-800">
                  <Grid3X3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 text-neutral-400">
                  <List className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Demo Products */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {demoProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Demo products for when Shopify is not connected - using real Phoinix product images
const demoProducts = [
  {
    id: "demo-1",
    title: "CoQ10 Ubiquinone",
    handle: "coq10-ubiquinone",
    description: "Antioxidant support for heart health and cellular energy production. Formulated to support overall health and well-being.",
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
      edges: [{ node: { id: "variant-1", title: "30 Capsules", availableForSale: true } }],
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
      edges: [{ node: { id: "variant-2", title: "60 Softgels", availableForSale: true } }],
    },
  },
  {
    id: "demo-3",
    title: "5-HTP Supplement",
    handle: "5-htp-supplement",
    description: "Natural mood support and sleep aid. Promotes serotonin production for balanced wellness and restful sleep.",
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
      edges: [{ node: { id: "variant-3", title: "60 Capsules", availableForSale: true } }],
    },
  },
  {
    id: "demo-4",
    title: "Probiotics Supplement",
    handle: "probiotics-supplement",
    description: "Digestive health support with beneficial bacteria. Supports gut health and immune function.",
    priceRange: {
      minVariantPrice: {
        amount: "32.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/probiotics.jpg",
            altText: "Probiotics Supplement",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [{ node: { id: "variant-4", title: "60 Capsules", availableForSale: true } }],
    },
  },
  {
    id: "demo-5",
    title: "Sea Moss Supplement",
    handle: "sea-moss-supplement",
    description: "Nutrient-dense sea vegetable rich in minerals. Supports thyroid health, immunity, and overall vitality.",
    priceRange: {
      minVariantPrice: {
        amount: "29.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/sea-moss.jpg",
            altText: "Sea Moss Supplement",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [{ node: { id: "variant-5", title: "60 Capsules", availableForSale: true } }],
    },
  },
  {
    id: "demo-6",
    title: "Phoinix Whey Protein",
    handle: "phoinix-whey-protein",
    description: "Hydrolyzed whey protein isolate for lean muscle growth and recovery. 25g protein per serving with fast absorption.",
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
      edges: [{ node: { id: "variant-6", title: "2lb Container", availableForSale: true } }],
    },
  },
  {
    id: "demo-7",
    title: "Organic Beetroot Powder",
    handle: "organic-beetroot-powder",
    description: "Nitric oxide booster for enhanced blood flow and exercise performance. Natural energy and endurance support.",
    priceRange: {
      minVariantPrice: {
        amount: "26.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/beetroot.jpg",
            altText: "Organic Beetroot Powder",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [{ node: { id: "variant-7", title: "30 Servings", availableForSale: true } }],
    },
  },
  {
    id: "demo-8",
    title: "Mushroom Complex",
    handle: "mushroom-complex",
    description: "Powerful blend of Lion's Mane, Reishi, and Cordyceps. Supports cognitive function, immunity, and stress response.",
    priceRange: {
      minVariantPrice: {
        amount: "34.99",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/mushroom-complex.png",
            altText: "Mushroom Complex Supplement",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [{ node: { id: "variant-8", title: "60 Capsules", availableForSale: true } }],
    },
  },
  {
    id: "demo-9",
    title: "Creatine Monohydrate",
    handle: "creatine-monohydrate",
    description: "Pure micronized creatine for strength and power. Supports muscle growth, recovery, and high-intensity performance.",
    priceRange: {
      minVariantPrice: {
        amount: "22.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/creatine.png",
            altText: "Creatine Monohydrate",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [{ node: { id: "variant-9", title: "300g", availableForSale: true } }],
    },
  },
  {
    id: "demo-10",
    title: "Pre-Workout",
    handle: "pre-workout",
    description: "Clean energy and focus without the crash. Enhances endurance, pump, and mental clarity for peak performance.",
    priceRange: {
      minVariantPrice: {
        amount: "35.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/pre-workout.png",
            altText: "Pre-Workout Supplement",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [{ node: { id: "variant-10", title: "30 Servings", availableForSale: true } }],
    },
  },
  {
    id: "demo-11",
    title: "Broken Top Coffee",
    handle: "broken-top-coffee",
    description: "Medium roast with chocolate-covered almonds, maple syrup, and citrus notes. SCA Specialty Grade, small-batch roasted in the USA.",
    priceRange: {
      minVariantPrice: {
        amount: "18.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/broken-top-coffee.jpg",
            altText: "Broken Top Coffee Blend",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [{ node: { id: "variant-11", title: "12oz Whole Bean", availableForSale: true } }],
    },
  },
  {
    id: "demo-12",
    title: "Flathead Valley Coffee",
    handle: "flathead-valley-coffee",
    description: "Medium-dark roast with bakers chocolate, caramelized sugar, and warm spice. Bold wake-up routine coffee.",
    priceRange: {
      minVariantPrice: {
        amount: "18.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/flathead-valley-coffee.jpg",
            altText: "Flathead Valley Coffee Blend",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [{ node: { id: "variant-12", title: "12oz Whole Bean", availableForSale: true } }],
    },
  },
  {
    id: "demo-13",
    title: "Rock Creek Coffee",
    handle: "rock-creek-coffee",
    description: "Medium roast with toffee, dark chocolate, and citrus balance. The Citrus + Chocolate hero for balanced energy rituals.",
    priceRange: {
      minVariantPrice: {
        amount: "18.00",
        currencyCode: "USD",
      },
    },
    images: {
      edges: [
        {
          node: {
            url: "/rock-creek-coffee.jpg",
            altText: "Rock Creek Coffee Blend",
            width: 500,
            height: 500,
          },
        },
      ],
    },
    variants: {
      edges: [{ node: { id: "variant-13", title: "12oz Whole Bean", availableForSale: true } }],
    },
  },
];
