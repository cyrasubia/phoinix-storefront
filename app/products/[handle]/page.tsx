import { getProduct, getProducts } from "@/lib/shopify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetails from "@/components/ProductDetails";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getProducts();
  // Fallback to demo handles if no products from Shopify
  const handles = products.length > 0 
    ? products.map((product) => ({ handle: product.handle }))
    : [
        { handle: "phoinix-rise-morning-blend" },
        { handle: "vitality-greens-powder" },
        { handle: "omega-3-elite-fish-oil" },
        { handle: "sleep-recovery-complex" },
      ];
  return handles;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  );
}
