
import { APP_CONTENT } from '../../constants/app.constants';
import './Header.css';

export function Header() {
  return (
    <header className="header" dir="rtl">
      <div className="header__brand">
        <img
          src={APP_CONTENT.logoPath}
          alt={APP_CONTENT.name}
          className="header__logo"
        />
        <span className="header__name">{APP_CONTENT.name}</span>
      </div>
    </header>
  );
}
