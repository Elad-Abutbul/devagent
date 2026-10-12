
import { useState, type FormEvent } from 'react';
import { APP_CONTENT } from '../../constants/app.constants';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    onSearch(trimmedQuery);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <input
        className="search-bar__input"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={APP_CONTENT.searchPlaceholder}
        aria-label={APP_CONTENT.searchPlaceholder}
      />

      <button className="search-bar__button" type="submit">
        {APP_CONTENT.searchButton}
      </button>
    </form>
  );
}
