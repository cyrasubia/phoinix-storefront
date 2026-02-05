import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "demo-store.myshopify.com",
  apiVersion: "2026-01",
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "demo-token",
});

export interface ShopifyProduct {
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
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image?: {
    url: string;
    altText: string | null;
  };
}

// GraphQL query helper
export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T> {
  try {
    const { data, errors } = await client.request(query, { variables });

    if (errors) {
      console.error("Shopify GraphQL errors:", errors);
      throw new Error("GraphQL Error");
    }

    return data as T;
  } catch (error) {
    console.error("Shopify fetch error:", error);
    throw error;
  }
}

// Get all products
export async function getProducts(): Promise<ShopifyProduct[]> {
  const query = `
    query getProducts {
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            description
            descriptionHtml
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{ products: { edges: Array<{ node: ShopifyProduct }> } }>({ query });
    return data.products.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Get single product by handle
export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  const query = `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{ product: ShopifyProduct }>({
      query,
      variables: { handle },
    });
    return data.product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Get all collections
export async function getCollections(): Promise<ShopifyCollection[]> {
  const query = `
    query getCollections {
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              url
              altText
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{ collections: { edges: Array<{ node: ShopifyCollection }> } }>({ query });
    return data.collections.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}

// Get collection with products
export async function getCollection(handle: string): Promise<{ collection: ShopifyCollection; products: ShopifyProduct[] } | null> {
  const query = `
    query getCollection($handle: String!) {
      collection(handle: $handle) {
        id
        title
        handle
        description
        image {
          url
          altText
        }
        products(first: 20) {
          edges {
            node {
              id
              title
              handle
              description
              descriptionHtml
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
                    width
                    height
                  }
                }
              }
              variants(first: 5) {
                edges {
                  node {
                    id
                    title
                    availableForSale
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{ collection: ShopifyCollection & { products: { edges: Array<{ node: ShopifyProduct }> } } }>({
      query,
      variables: { handle },
    });
    
    if (!data.collection) return null;
    
    return {
      collection: data.collection,
      products: data.collection.products.edges.map((edge) => edge.node),
    };
  } catch (error) {
    console.error("Error fetching collection:", error);
    return null;
  }
}
