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
      colors: ["#dc2626", "#991b1b", "#b91c1c", "#ef4444"],
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-500 mb-4 sm:mb-8 overflow-x-auto">
        <Link href="/" className="hover:text-red-500 transition-colors whitespace-nowrap">Home</Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
        <Link href="/shop" className="hover:text-red-500 transition-colors whitespace-nowrap">Shop</Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
        <span className="text-white font-medium truncate">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-3 sm:space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-800">
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
              <div className="w-full h-full bg-gradient-to-br from-red-900 to-neutral-900 flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 sm:h-24 sm:w-24 text-red-500" />
              </div>
            )}
            
            {/* Badges */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-1.5 sm:gap-2">
              <Badge className="bg-red-600 text-white border-0 text-xs sm:text-sm">New</Badge>
              <Badge className="bg-neutral-900/90 text-white backdrop-blur-sm border-0 text-xs sm:text-sm">
                Best Seller
              </Badge>
            </div>
          </div>

          {/* Thumbnail Gallery - Horizontal scroll on mobile */}
          {images.length > 1 && (
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-4">
              {images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-neutral-800 border-2 flex-shrink-0 w-16 sm:w-auto transition-all ${
                    selectedImage === index
                      ? "border-red-500 ring-2 ring-red-500/20"
                      : "border-transparent hover:border-neutral-700"
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
        <div className="space-y-4 sm:space-y-6">
          {/* Title & Rating */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
              {product.title}
            </h1>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-red-500 text-red-500" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-neutral-500">4.9 (127 reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
            <span className="text-3xl sm:text-4xl font-bold text-white">
              ${price.toFixed(2)}
            </span>
            <span className="text-base sm:text-lg text-neutral-500 line-through">
              ${(price * 1.2).toFixed(2)}
            </span>
            <Badge className="bg-red-950 text-red-400 border-0 text-xs sm:text-sm">
              Save 20%
            </Badge>
          </div>

          <Separator className="bg-neutral-800" />

          {/* Description */}
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-xs sm:text-sm font-medium text-white">Quantity:</span>
            <div className="flex items-center border border-neutral-700 rounded-lg bg-neutral-900">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-r-none text-neutral-400 hover:text-white hover:bg-neutral-800"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <span className="w-10 sm:w-12 text-center font-medium text-white text-sm sm:text-base">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-l-none text-neutral-400 hover:text-white hover:bg-neutral-800"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={isAdded || !variant?.availableForSale}
            className={`w-full py-5 sm:py-7 text-base sm:text-lg font-semibold btn-shine transition-all duration-300 ${
              isAdded
                ? "bg-red-600 hover:bg-red-600"
                : "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Added to Cart!
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Add to Cart — ${(price * quantity).toFixed(2)}
              </>
            )}
          </Button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4">
            {[
              { icon: ShieldCheck, text: "Secure Checkout" },
              { icon: Truck, text: "Free Shipping $50+" },
              { icon: RotateCcw, text: "30-Day Returns" },
            ].map((badge) => (
              <div key={badge.text} className="flex flex-col items-center text-center gap-1.5 sm:gap-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-red-950 flex items-center justify-center">
                  <badge.icon className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                </div>
                <span className="text-[10px] sm:text-xs text-neutral-400 font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          <Separator className="bg-neutral-800" />

          {/* Product Highlights */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Product Highlights</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Science-backed formulation with clinically studied ingredients",
                "Third-party tested for purity and potency",
                "Non-GMO, gluten-free, and vegan-friendly",
                "Sustainably sourced with eco-friendly packaging",
                "Manufactured in FDA-registered, GMP-certified facility",
              ].map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-400 text-xs sm:text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
