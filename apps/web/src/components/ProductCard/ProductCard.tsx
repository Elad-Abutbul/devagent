
import type { ProductOffer } from '../../types/product.types';
import {
  PRODUCT_CARD_CONTENT,
  PRICE_FORMAT,
} from '../../constants/app.constants';
import { UnverifiedValue } from '../UnverifiedValue/UnverifiedValue';
import './ProductCard.css';

interface ProductCardProps {
  offer: ProductOffer;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat(PRICE_FORMAT.locale, {
    style: PRICE_FORMAT.style,
    currency: PRICE_FORMAT.currency,
    maximumFractionDigits: PRICE_FORMAT.maximumFractionDigits,
  }).format(price);

export function ProductCard({ offer }: ProductCardProps) {
  const verificationProps = {
    productUrl: offer.productUrl,
    searchUrl: offer.searchUrl,
  };

  const priceValue = (value: number | null) =>
    value === null
      ? <UnverifiedValue {...verificationProps} />
      : formatPrice(value);

  const stockValue =
    offer.inStock === null
      ? <UnverifiedValue {...verificationProps} />
      : offer.inStock
        ? PRODUCT_CARD_CONTENT.inStock
        : PRODUCT_CARD_CONTENT.outOfStock;

  return (
    <article className="product-card">
      <div className="product-card__info">
        <span className="product-card__store">{offer.storeName}</span>
        <h3 className="product-card__name">{offer.productName}</h3>
        <span className="product-card__stock">{stockValue}</span>
      </div>

      <div className="product-card__prices">
        <div>
          <span className="product-card__label">
            {PRODUCT_CARD_CONTENT.regularPrice}
          </span>
          <strong>{priceValue(offer.price)}</strong>
        </div>

        <div>
          <span className="product-card__label">
            {PRODUCT_CARD_CONTENT.eilatPrice}
          </span>
          <strong>{priceValue(offer.eilatPrice)}</strong>
        </div>
      </div>

      <div className="product-card__details">
        <p>
          {PRODUCT_CARD_CONTENT.shipping}: {priceValue(offer.shippingPrice)}
        </p>
        <p>
          {PRODUCT_CARD_CONTENT.warranty}:{' '}
          {offer.warranty ?? <UnverifiedValue {...verificationProps} />}
        </p>
      </div>

      {offer.productUrl && (
        <a
          href={offer.productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card__link"
        >
          {PRODUCT_CARD_CONTENT.visitStore}
        </a>
      )}
    </article>
  );
}
    