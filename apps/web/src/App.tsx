
import { SearchBar } from './components/SearchBar/SearchBar';
import { APP_CONTENT } from './constants/app.constants';
import { Header } from './components/Header/Header';
import './App.css';

function App() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  
return (
  <div className="app-layout" dir="rtl">
    <Header />

    <main className="app">
      <section className="app__hero">
        <span className="app__eyebrow">SMART SHOPPING</span>

        <h1 className="app__title">{APP_CONTENT.name}</h1>

        <SearchBar onSearch={handleSearch} />

        <p className="app__hint">{APP_CONTENT.searchHint}</p>
      </section>
    </main>
  </div>
);

}

export default App;
