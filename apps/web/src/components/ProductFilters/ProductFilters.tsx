
import type { ProductOffer } from '../../types/product.types';
import { RESULTS_CONTENT } from '../../constants/app.constants';
import './ProductFilters.css';

export type SelectedFilters = Record<string, string[]>;

interface ProductFiltersProps {
  offers: ProductOffer[];
  selectedFilters: SelectedFilters;
  onChange: (filters: SelectedFilters) => void;
}

export function ProductFilters({
  offers,
  selectedFilters,
  onChange,
}: ProductFiltersProps) {
  const groups = new Map<string, Set<string>>();

  offers.forEach((offer) => {
    Object.entries(offer.attributes).forEach(([key, value]) => {
      if (!groups.has(key)) groups.set(key, new Set());
      groups.get(key)!.add(value);
    });
  });

  const toggleFilter = (key: string, value: string) => {
    const selected = selectedFilters[key] ?? [];

    const nextValues = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    onChange({ ...selectedFilters, [key]: nextValues });
  };

  return (
    <section className="product-filters">
      <h2>{RESULTS_CONTENT.filtersTitle}</h2>
      <p>{RESULTS_CONTENT.allOptionsHint}</p>

      <div className="product-filters__groups">
        {[...groups.entries()].map(([group, options]) => (
          <fieldset key={group} className="product-filters__group">
            <legend>{group}</legend>

            {[...options].map((option) => (
              <label key={option} className="product-filters__option">
                <input
                  type="checkbox"
                  checked={(selectedFilters[group] ?? []).includes(option)}
                  onChange={() => toggleFilter(group, option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </fieldset>
        ))}
      </div>
    </section>
  );
}
