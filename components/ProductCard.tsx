"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Check, Star } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    handle: string;
    description: string;
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
        };
      }>;
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = product.images.edges[0]?.node;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const variant = product.variants.edges[0]?.node;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!variant) return;

    // Fire confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#dc2626", "#991b1b", "#b91c1c", "#ef4444"],
    });

    // Add to cart
    addItem({
      id: product.id,
      variantId: variant.id,
      title: product.title,
      handle: product.handle,
      price: price,
      quantity: 1,
      image: image?.url,
    });

    // Show success state
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group relative block bg-neutral-900 rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-800 card-lift"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-neutral-800">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 animate-shimmer" />
        )}
        
        {image ? (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            fill
            className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-red-900 to-neutral-900 flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-red-500" />
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1.5 sm:gap-2">
          <Badge className="bg-red-600 text-white border-0 text-xs sm:text-sm">
            New
          </Badge>
        </div>

        {/* Quick Add Button - Desktop: hover only, Mobile: always visible */}
        <div className="hidden sm:block absolute bottom-4 left-4 right-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            onClick={handleAddToCart}
            className={`w-full font-semibold transition-all duration-300 ${
              isAdded
                ? "bg-red-600 hover:bg-red-600"
                : "bg-neutral-900/95 backdrop-blur-sm text-white hover:bg-neutral-800 border border-neutral-700"
            }`}
            disabled={isAdded || !variant?.availableForSale}
          >
            {isAdded ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Added!
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-red-500 text-red-500"
            />
          ))}
          <span className="text-xs text-neutral-500 ml-1">(48)</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-white text-base sm:text-lg leading-tight mb-1.5 sm:mb-2 group-hover:text-red-500 transition-colors line-clamp-1">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 mb-3 sm:mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-white">
              ${price.toFixed(2)}
            </p>
            <p className="text-[10px] sm:text-xs text-neutral-500">
              {product.priceRange.minVariantPrice.currencyCode}
            </p>
          </div>

          {/* Mobile Add Button - Always visible */}
          <Button
            size="sm"
            onClick={handleAddToCart}
            className={`sm:hidden font-semibold transition-all duration-300 ${
              isAdded
                ? "bg-red-600 hover:bg-red-600"
                : "bg-red-600 hover:bg-red-500 text-white"
            }`}
            disabled={isAdded || !variant?.availableForSale}
          >
            {isAdded ? (
              <>
                <Check className="h-3.5 w-3.5 mr-1" />
                Added
              </>
            ) : (
              <>
                <ShoppingBag className="h-3.5 w-3.5 mr-1" />
                Add
              </>
            )}
          </Button>

          {/* Tablet/Desktop Add Button (icon only) */}
          <Button
            size="icon"
            onClick={handleAddToCart}
            className="hidden sm:flex h-9 w-9 rounded-full bg-red-950 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm"
            disabled={isAdded || !variant?.availableForSale}
          >
            {isAdded ? (
              <Check className="h-4 w-4" />
            ) : (
              <ShoppingBag className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
}
