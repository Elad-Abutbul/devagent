
export interface ProductOffer {
  id: string;
  storeName: string;
  productName: string;
  price: number | null;
  eilatPrice: number | null;
  shippingPrice: number | null;
  inStock: boolean | null;
  warranty: string | null;
  productUrl: string | null;
  searchUrl: string | null;
  attributes: Record<string, string>;
}
