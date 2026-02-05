"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { ShoppingBag, Menu, X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, isOpen, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-stone-200/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-3">
            {/* Logo Icon */}
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20 transition-all duration-300 group-hover:shadow-emerald-500/40 group-hover:scale-105">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                    className="opacity-80"
                  />
                </svg>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
            </div>

            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-gradient">
                Phoinix
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 -mt-1">
                Transformations
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/shop"
            className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors relative group"
          >
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Cart Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-emerald-50 transition-colors"
              >
                <ShoppingBag className="h-5 w-5 text-stone-600" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-emerald-600 text-white text-xs font-bold border-2 border-white">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg flex flex-col">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-lg font-bold">
                  <ShoppingBag className="h-5 w-5 text-emerald-600" />
                  Your Cart ({totalItems})
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 overflow-y-auto py-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center">
                      <ShoppingBag className="h-10 w-10 text-stone-400" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-stone-900">Your cart is empty</p>
                      <p className="text-sm text-stone-500">Add some products to get started</p>
                    </div>
                    <Button
                      onClick={() => setIsOpen(false)}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white"
                      asChild
                    >
                      <Link href="/shop">Continue Shopping</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100"
                      >
                        <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-white flex-shrink-0">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                              <ShoppingBag className="h-8 w-8 text-emerald-400" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/products/${item.handle}`}
                            className="font-medium text-stone-900 hover:text-emerald-600 transition-colors line-clamp-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                          <p className="text-sm text-stone-500 mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-stone-400 hover:text-red-500 flex-shrink-0"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-stone-200 pt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Subtotal</span>
                    <span className="font-medium text-stone-900">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span className="text-stone-900">Total</span>
                    <span className="text-emerald-600">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-6 btn-shine">
                    Checkout
                  </Button>
                  <p className="text-xs text-center text-stone-500">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
              )}
            </SheetContent>
          </Sheet>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-stone-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-gradient">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                {[
                  { href: "/", label: "Home" },
                  { href: "/shop", label: "Shop" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-stone-700 hover:text-emerald-600 py-3 px-4 rounded-lg hover:bg-stone-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
