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
      colors: ["#dc2626", "#991b1b", "#b91c1c"],
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
      className="group relative block bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-neutral-950">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 animate-shimmer" />
        )}
        
        {image ? (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            fill
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
            <ShoppingBag className="h-16 w-16 text-neutral-700" />
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges - Neutral */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className="bg-neutral-800 text-neutral-200 border-0 text-xs">
            New
          </Badge>
        </div>

        {/* Quick Add Button - Red on hover */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            onClick={handleAddToCart}
            className={`w-full font-semibold transition-all duration-300 ${
              isAdded
                ? "bg-red-600 hover:bg-red-600"
                : "bg-red-600 hover:bg-red-500 text-white"
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
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-neutral-600 text-neutral-600"
            />
          ))}
          <span className="text-xs text-neutral-600 ml-1">(48)</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-white text-lg leading-tight mb-2 group-hover:text-red-500 transition-colors line-clamp-1">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-500 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">
              ${price.toFixed(2)}
            </p>
            <p className="text-xs text-neutral-600">
              {product.priceRange.minVariantPrice.currencyCode}
            </p>
          </div>

          {/* Mobile Add Button */}
          <Button
            size="icon"
            onClick={handleAddToCart}
            className="h-10 w-10 rounded-full bg-neutral-800 text-neutral-400 hover:bg-red-600 hover:text-white transition-all duration-300 sm:hidden"
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
    </Link>
  );
}
