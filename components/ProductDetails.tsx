"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingBag, 
  Check, 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  ChevronRight,
  Minus,
  Plus
} from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";

interface ProductDetailsProps {
  product: {
    id: string;
    title: string;
    handle: string;
    description: string;
    descriptionHtml: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
          width: number;
          height: number;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          availableForSale: boolean;
          price: {
            amount: string;
            currencyCode: string;
          };
        };
      }>;
    };
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem, setIsOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const images = product.images.edges;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const variant = product.variants.edges[0]?.node;

  const handleAddToCart = () => {
    if (!variant) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#059669", "#14b8a6", "#10b981", "#34d399"],
    });

    addItem({
      id: product.id,
      variantId: variant.id,
      title: product.title,
      handle: product.handle,
      price: price,
      quantity: quantity,
      image: images[0]?.node.url,
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setIsOpen(true);
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/shop" className="hover:text-emerald-600 transition-colors">Shop</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-stone-900 font-medium">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100">
            {images.length > 0 ? (
              <Image
                src={images[selectedImage]?.node.url || images[0]?.node.url}
                alt={images[selectedImage]?.node.altText || product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <ShoppingBag className="h-24 w-24 text-emerald-300" />
              </div>
            )}
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Badge className="bg-emerald-600 text-white border-0">New</Badge>
              <Badge className="bg-white/90 text-stone-800 backdrop-blur-sm border-0">
                Best Seller
              </Badge>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-stone-100 border-2 transition-all ${
                    selectedImage === index
                      ? "border-emerald-500 ring-2 ring-emerald-500/20"
                      : "border-transparent hover:border-emerald-200"
                  }`}
                >
                  <Image
                    src={image.node.url}
                    alt={image.node.altText || `${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title & Rating */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {product.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-stone-500">4.9 (127 reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-stone-900">
              ${price.toFixed(2)}
            </span>
            <span className="text-lg text-stone-400 line-through">
              ${(price * 1.2).toFixed(2)}
            </span>
            <Badge className="bg-emerald-100 text-emerald-700 border-0">
              Save 20%
            </Badge>
          </div>

          <Separator />

          {/* Description */}
          <div className="prose prose-stone max-w-none">
            <p className="text-stone-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-stone-700">Quantity:</span>
            <div className="flex items-center border border-stone-200 rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-r-none"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-l-none"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={isAdded || !variant?.availableForSale}
            className={`w-full py-7 text-lg font-semibold btn-shine transition-all duration-300 ${
              isAdded
                ? "bg-emerald-600 hover:bg-emerald-600"
                : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="h-5 w-5 mr-2" />
                Added to Cart!
              </>
            ) : (
              <>
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart — ${(price * quantity).toFixed(2)}
              </>
            )}
          </Button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { icon: ShieldCheck, text: "Secure Checkout" },
              { icon: Truck, text: "Free Shipping $50+" },
              { icon: RotateCcw, text: "30-Day Returns" },
            ].map((badge) => (
              <div key={badge.text} className="flex flex-col items-center text-center gap-2">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <badge.icon className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-xs text-stone-600 font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          <Separator />

          {/* Product Highlights */}
          <div>
            <h3 className="font-semibold text-stone-900 mb-4">Product Highlights</h3>
            <ul className="space-y-3">
              {[
                "Science-backed formulation with clinically studied ingredients",
                "Third-party tested for purity and potency",
                "Non-GMO, gluten-free, and vegan-friendly",
                "Sustainably sourced with eco-friendly packaging",
                "Manufactured in FDA-registered, GMP-certified facility",
              ].map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
