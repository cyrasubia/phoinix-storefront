import { getProducts } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Filter, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-gradient-to-b from-emerald-50/50 to-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 mb-6">
                <Package className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-800">
                  All Products
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
                Shop Our Collection
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed">
                Discover premium supplements and specialty coffee crafted for your wellness journey.
              </p>
            </div>
          </div>
        </div>

        {/* Filters & Products */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-8 border-b border-stone-200">
            <p className="text-sm text-stone-500">
              Showing {products.length > 0 ? products.length : demoProducts.length} products
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <div className="flex items-center gap-1 border rounded-lg p-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 bg-stone-100">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Demo Products */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
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
    title: "Broken Top Coffee Blend",
    handle: "broken-top-coffee-blend",
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
      edges: [{ node: { id: "variant-6", title: "12oz Whole Bean", availableForSale: true } }],
    },
  },
  {
    id: "demo-7",
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
      edges: [{ node: { id: "variant-7", title: "12oz Whole Bean", availableForSale: true } }],
    },
  },
  {
    id: "demo-8",
    title: "Rock Creek Coffee Blend",
    handle: "rock-creek-coffee-blend",
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
      edges: [{ node: { id: "variant-8", title: "12oz Whole Bean", availableForSale: true } }],
    },
  },
];
