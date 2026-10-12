
import type { ProductOffer } from '../types/product.types';
import { STORE_DOMAINS } from '../constants/app.constants';
import { createStoreSearchUrl } from '../utils/storeSearch';

export const MOCK_PRODUCT_OFFERS: ProductOffer[] = [
  {
    id: '1',
    storeName: 'KSP',
    productName: 'Apple iPhone 17 256GB',
    price: 3299,
    eilatPrice: 2799,
    shippingPrice: 0,
    inStock: true,
    warranty: '12 חודשי אחריות',
    productUrl: null,
    searchUrl: createStoreSearchUrl(
      'Apple iPhone 17 256GB',
      STORE_DOMAINS.KSP,
    ),
    attributes: {
      אחסון: '256GB',
      צבע: 'שחור',
    },
  },
  {
    id: '2',
    storeName: 'Ivory',
    productName: 'Apple iPhone 17 256GB',
    price: 3399,
    eilatPrice: null,
    shippingPrice: 29,
    inStock: null,
    warranty: '12 חודשי אחריות',
    productUrl: null,
    searchUrl: createStoreSearchUrl(
      'Apple iPhone 17 256GB',
      STORE_DOMAINS.Ivory,
    ),
    attributes: {
      אחסון: '256GB',
      צבע: 'לבן',
    },
  },
  {
    id: '3',
    storeName: 'BUG',
    productName: 'Apple iPhone 17 512GB',
    price: null,
    eilatPrice: null,
    shippingPrice: null,
    inStock: false,
    warranty: null,
    productUrl: null,
    searchUrl: createStoreSearchUrl(
      'Apple iPhone 17 512GB',
      STORE_DOMAINS.BUG,
    ),
    attributes: {
      אחסון: '512GB',
      צבע: 'שחור',
    },
  },
];
