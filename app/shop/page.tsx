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
              Showing {products.length > 0 ? products.length : 4} products
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
    images: { edges: [] },
    variants: {
      edges: [{ node: { id: "variant-1", title: "12oz", availableForSale: true } }],
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
    images: { edges: [] },
    variants: {
      edges: [{ node: { id: "variant-2", title: "30 servings", availableForSale: true } }],
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
    images: { edges: [] },
    variants: {
      edges: [{ node: { id: "variant-3", title: "60 softgels", availableForSale: true } }],
    },
  },
  {
    id: "demo-4",
    title: "Sleep & Recovery Complex",
    handle: "sleep-recovery-complex",
    description: "Natural sleep aid with magnesium, L-theanine, and melatonin. Wake up refreshed.",
    priceRange: {
      minVariantPrice: {
        amount: "39.99",
        currencyCode: "USD",
      },
    },
    images: { edges: [] },
    variants: {
      edges: [{ node: { id: "variant-4", title: "60 capsules", availableForSale: true } }],
    },
  },
];
