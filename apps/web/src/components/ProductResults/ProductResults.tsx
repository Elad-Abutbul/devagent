
import type { ProductOffer } from '../../types/product.types';
import { RESULTS_CONTENT } from '../../constants/app.constants';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductResults.css';

interface ProductResultsProps {
  offers: ProductOffer[];
}

export function ProductResults({ offers }: ProductResultsProps) {
  const sortedOffers = [...offers].sort(
    (a, b) => (a.price ?? Infinity) - (b.price ?? Infinity),
  );

  return (
    <section className="product-results">
      <p className="product-results__sort">{RESULTS_CONTENT.sortLabel}</p>

      {sortedOffers.length === 0 ? (
        <p>{RESULTS_CONTENT.emptyResults}</p>
      ) : (
        sortedOffers.map((offer) => (
          <ProductCard key={offer.id} offer={offer} />
        ))
      )}
    </section>
  );
}
