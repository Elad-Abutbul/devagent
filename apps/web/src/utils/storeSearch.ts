import { SEARCH_CONFIG } from '../constants/app.constants';

export function createStoreSearchUrl(
  productName: string,
  storeDomain: string,
): string {
  const url = new URL(SEARCH_CONFIG.googleSearchUrl);

  url.searchParams.set(
    'q',
    `${SEARCH_CONFIG.siteOperator}${storeDomain} ${productName}`,
  );

  return url.toString();
}