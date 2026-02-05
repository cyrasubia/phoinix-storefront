import { getProduct, getProducts } from "@/lib/shopify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetails from "@/components/ProductDetails";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

// Demo products data for fallback when Shopify is not connected
const demoProducts: Record<string, any> = {
  "coq10-ubiquinone": {
    id: "demo-1",
    title: "CoQ10 Ubiquinone",
    handle: "coq10-ubiquinone",
    description: "Antioxidant support for heart health and cellular energy production. Formulated to support overall health and well-being. CoQ10 is a powerful antioxidant that helps protect cells from damage and plays a crucial role in energy production.",
    descriptionHtml: "<p>Antioxidant support for heart health and cellular energy production.</p>",
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
            price: {
              amount: "30.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "omega-3-fish-oil": {
    id: "demo-2",
    title: "Omega-3 Fish Oil",
    handle: "omega-3-fish-oil",
    description: "Pharmaceutical-grade omega-3s from wild-caught fish. Supports heart, brain, and joint health. Each serving delivers EPA and DHA in optimal ratios for maximum benefit.",
    descriptionHtml: "<p>Pharmaceutical-grade omega-3s from wild-caught fish.</p>",
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
            price: {
              amount: "28.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "5-htp-supplement": {
    id: "demo-3",
    title: "5-HTP Supplement",
    handle: "5-htp-supplement",
    description: "Natural mood support and sleep aid. Promotes serotonin production for balanced wellness and restful sleep. Derived from Griffonia simplicifolia seeds.",
    descriptionHtml: "<p>Natural mood support and sleep aid.</p>",
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
            price: {
              amount: "24.99",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "probiotics-supplement": {
    id: "demo-4",
    title: "Probiotics Supplement",
    handle: "probiotics-supplement",
    description: "Digestive health support with beneficial bacteria. Supports gut health and immune function. Contains 10 billion CFU of multiple probiotic strains.",
    descriptionHtml: "<p>Digestive health support with beneficial bacteria.</p>",
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
      edges: [
        {
          node: {
            id: "variant-4",
            title: "60 Capsules",
            availableForSale: true,
            price: {
              amount: "32.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "sea-moss-supplement": {
    id: "demo-5",
    title: "Sea Moss Supplement",
    handle: "sea-moss-supplement",
    description: "Nutrient-dense sea vegetable rich in minerals. Supports thyroid health, immunity, and overall vitality. Contains 92 of the 102 minerals your body needs.",
    descriptionHtml: "<p>Nutrient-dense sea vegetable rich in minerals.</p>",
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
      edges: [
        {
          node: {
            id: "variant-5",
            title: "60 Capsules",
            availableForSale: true,
            price: {
              amount: "29.99",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "phoinix-whey-protein": {
    id: "demo-6",
    title: "Phoinix Whey Protein",
    handle: "phoinix-whey-protein",
    description: "Hydrolyzed whey protein isolate for lean muscle growth and recovery. 25g protein per serving with fast absorption. Low lactose and easy to digest.",
    descriptionHtml: "<p>Hydrolyzed whey protein isolate for lean muscle growth.</p>",
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
            id: "variant-6",
            title: "2lb Container",
            availableForSale: true,
            price: {
              amount: "45.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "organic-beetroot-powder": {
    id: "demo-7",
    title: "Organic Beetroot Powder",
    handle: "organic-beetroot-powder",
    description: "Nitric oxide booster for enhanced blood flow and exercise performance. Natural energy and endurance support. Made from organically grown beets.",
    descriptionHtml: "<p>Nitric oxide booster for enhanced blood flow.</p>",
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
      edges: [
        {
          node: {
            id: "variant-7",
            title: "30 Servings",
            availableForSale: true,
            price: {
              amount: "26.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "mushroom-complex": {
    id: "demo-8",
    title: "Mushroom Complex",
    handle: "mushroom-complex",
    description: "Powerful blend of Lion's Mane, Reishi, and Cordyceps. Supports cognitive function, immunity, and stress response. Standardized extracts for consistent potency.",
    descriptionHtml: "<p>Powerful blend of Lion's Mane, Reishi, and Cordyceps.</p>",
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
      edges: [
        {
          node: {
            id: "variant-8",
            title: "60 Capsules",
            availableForSale: true,
            price: {
              amount: "34.99",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "creatine-monohydrate": {
    id: "demo-9",
    title: "Creatine Monohydrate",
    handle: "creatine-monohydrate",
    description: "Pure micronized creatine for strength and power. Supports muscle growth, recovery, and high-intensity performance. The most researched sports supplement.",
    descriptionHtml: "<p>Pure micronized creatine for strength and power.</p>",
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
      edges: [
        {
          node: {
            id: "variant-9",
            title: "300g",
            availableForSale: true,
            price: {
              amount: "22.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "pre-workout": {
    id: "demo-10",
    title: "Pre-Workout",
    handle: "pre-workout",
    description: "Clean energy and focus without the crash. Enhances endurance, pump, and mental clarity for peak performance. No artificial colors or sweeteners.",
    descriptionHtml: "<p>Clean energy and focus without the crash.</p>",
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
      edges: [
        {
          node: {
            id: "variant-10",
            title: "30 Servings",
            availableForSale: true,
            price: {
              amount: "35.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "broken-top-coffee": {
    id: "demo-11",
    title: "Broken Top Coffee",
    handle: "broken-top-coffee",
    description: "Medium roast with chocolate-covered almonds, maple syrup, and citrus notes. SCA Specialty Grade, small-batch roasted in the USA. The perfect morning ritual companion.",
    descriptionHtml: "<p>Medium roast with chocolate-covered almonds, maple syrup, and citrus notes.</p>",
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
      edges: [
        {
          node: {
            id: "variant-11",
            title: "12oz Whole Bean",
            availableForSale: true,
            price: {
              amount: "18.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "flathead-valley-coffee": {
    id: "demo-12",
    title: "Flathead Valley Coffee",
    handle: "flathead-valley-coffee",
    description: "Medium-dark roast with bakers chocolate, caramelized sugar, and warm spice. Bold wake-up routine coffee. Ethically sourced through B Corp certified suppliers.",
    descriptionHtml: "<p>Medium-dark roast with bakers chocolate, caramelized sugar, and warm spice.</p>",
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
      edges: [
        {
          node: {
            id: "variant-12",
            title: "12oz Whole Bean",
            availableForSale: true,
            price: {
              amount: "18.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
  "rock-creek-coffee": {
    id: "demo-13",
    title: "Rock Creek Coffee",
    handle: "rock-creek-coffee",
    description: "Medium roast with toffee, dark chocolate, and citrus balance. The Citrus + Chocolate hero for balanced energy rituals. Small-batch roasted in the USA.",
    descriptionHtml: "<p>Medium roast with toffee, dark chocolate, and citrus balance.</p>",
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
      edges: [
        {
          node: {
            id: "variant-13",
            title: "12oz Whole Bean",
            availableForSale: true,
            price: {
              amount: "18.00",
              currencyCode: "USD",
            },
          },
        },
      ],
    },
  },
};

// Generate static params for all demo products
export async function generateStaticParams() {
  const products = await getProducts();
  
  // If Shopify returns products, use those handles
  if (products.length > 0) {
    return products.map((product) => ({ handle: product.handle }));
  }
  
  // Otherwise use demo product handles
  return Object.keys(demoProducts).map((handle) => ({ handle }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  
  // Try to fetch from Shopify first
  const product = await getProduct(handle);
  
  // If Shopify returns a product, use it
  if (product) {
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
  
  // If no Shopify product, check demo products
  const demoProduct = demoProducts[handle];
  
  if (demoProduct) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ProductDetails product={demoProduct} />
        </main>
        <Footer />
      </div>
    );
  }
  
  // If neither Shopify nor demo product exists, show 404
  notFound();
}
