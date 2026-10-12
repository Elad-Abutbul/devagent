
import { PRODUCT_CARD_CONTENT } from '../../constants/app.constants';

interface UnverifiedValueProps {
  productUrl: string | null;
  searchUrl: string | null;
}

export function UnverifiedValue({
  productUrl,
  searchUrl,
}: UnverifiedValueProps) {
  const verificationUrl = productUrl ?? searchUrl;

  return (
    <span>
      {PRODUCT_CARD_CONTENT.unavailable}

      {verificationUrl && (
        <>
          {' · '}
          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PRODUCT_CARD_CONTENT.verifyOnStore} ↗
          </a>
        </>
      )}
    </span>
  );
}
