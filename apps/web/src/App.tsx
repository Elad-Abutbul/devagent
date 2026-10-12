
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ProductResults } from './components/ProductResults/ProductResults';
import {
  ProductFilters,
  type SelectedFilters,
} from './components/ProductFilters/ProductFilters';
import { MOCK_PRODUCT_OFFERS } from './mocks/products.mock';
import { APP_CONTENT } from './constants/app.constants';
import './App.css';

function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    setSelectedFilters({});
    setHasSearched(true);
  };

  const filteredOffers = MOCK_PRODUCT_OFFERS.filter((offer) =>
    Object.entries(selectedFilters).every(([key, values]) => {
      if (values.length === 0) return true;
      return values.includes(offer.attributes[key]);
    }),
  );

  return (
    <div className="app-layout" dir="rtl">
      <Header />

      <main className="app">
        <section className="app__hero">
          <span className="app__eyebrow">{APP_CONTENT.eyebrow}</span>
          <h1 className="app__title">{APP_CONTENT.name}</h1>

          <SearchBar onSearch={handleSearch} />

          <p className="app__hint">{APP_CONTENT.searchHint}</p>
        </section>

        {hasSearched && (
          <div className="app__results">
            <p className="app__results-notice">
              {APP_CONTENT.mockResultsNotice}
            </p>

            <ProductFilters
              offers={MOCK_PRODUCT_OFFERS}
              selectedFilters={selectedFilters}
              onChange={setSelectedFilters}
            />

            <ProductResults offers={filteredOffers} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
