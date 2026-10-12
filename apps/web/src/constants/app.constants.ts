
export const APP_CONTENT = {
  name: 'PriceWise',
  searchPlaceholder: 'איזה מוצר מחפשים?',
  searchButton: 'חיפוש',
  searchHint: 'לדוגמה: iPhone 17, MacBook Air, Sony WH-1000XM6',
  logoPath: '/PriceWise-icon.png',
  eyebrow: 'SMART SHOPPING',
mockResultsNotice: 'תוצאות הדגמה בלבד — הנתונים אינם מאומתים',
} as const;

export const PRODUCT_CARD_CONTENT = {
  regularPrice: 'מחיר רגיל',
  eilatPrice: 'מחיר אילת',
  shipping: 'משלוח',
  warranty: 'אחריות',
  visitStore: 'מעבר למוצר בחנות',
  verifyOnStore: 'בדוק באתר החנות',
  unavailable: 'לא אומת — יש לבדוק ידנית',
  inStock: 'במלאי',
  outOfStock: 'אזל מהמלאי',
} as const;

export const RESULTS_CONTENT = {
  filtersTitle: 'סינון תוצאות',
  allOptionsHint: 'ללא בחירה יוצגו כל האפשרויות',
  sortLabel: 'מיון: מהזול ליקר',
  emptyResults: 'לא נמצאו הצעות שמתאימות לסינון',
} as const;

export const PRICE_FORMAT = {
  locale: 'he-IL',
  currency: 'ILS',
  style: 'currency',
  maximumFractionDigits: 0,
} as const;
export const STORE_DOMAINS = {
  KSP: 'ksp.co.il',
  Ivory: 'ivory.co.il',
  BUG: 'bug.co.il',
} as const;

export const SEARCH_CONFIG = {
  googleSearchUrl: 'https://www.google.com/search',
  siteOperator: 'site:',
} as const;