import Image from "next/image";
import type { MenuItem } from "@/data/menu";

type PriceTagProps = {
  price: number;
  className?: string;
};

export function PriceTag({ price, className = "" }: PriceTagProps) {
  return (
    <div className={`price-tag-simple ${className}`.trim()}>
      <Image src="/images/saudi-riyal.svg" className="currency-svg" alt="" width={32} height={32} />
      <span className="amount">{price}</span>
    </div>
  );
}

type LacoPlaceholderProps = {
  className?: string;
};

export function LacoPlaceholder({ className = "" }: LacoPlaceholderProps) {
  return (
    <div className={`laco-placeholder ${className}`.trim()}>
      <span className="laco-brand-text laco-300">LACO</span>
    </div>
  );
}

type MasterCardProps = {
  item: MenuItem;
  theme?: "default" | "cold";
};

export function MasterCard({ item, theme = "default" }: MasterCardProps) {
  return (
    <article className={`master-card anim-item ${theme === "cold" ? "cold-theme" : ""}`}>
      <div className="master-img">
        {item.image ? (
          <Image src={item.image} alt={item.nameEn} fill sizes="(max-width: 600px) 50vw, 320px" className="menu-image" />
        ) : (
          <LacoPlaceholder />
        )}
      </div>
      <div className="master-info">
        <div className="info-text">
          <h3 className="m-name">{item.nameAr}</h3>
          <span className="m-en">{item.nameEn}</span>
        </div>
        <PriceTag price={item.price} />
      </div>
    </article>
  );
}

type CinemaCardProps = {
  item: MenuItem;
};

export function CinemaCard({ item }: CinemaCardProps) {
  return (
    <article className="cinema-card anim-item">
      <div className="cinema-img-box">
        {item.image ? (
          <Image src={item.image} alt={item.nameEn} fill sizes="(max-width: 600px) 50vw, 320px" className="menu-image" />
        ) : (
          <LacoPlaceholder />
        )}
      </div>
      <div className="product-label floating">
        <div className="label-info">
          <h3 className="p-name">{item.nameAr}</h3>
          <span className="p-sub">{item.nameEn}</span>
        </div>
        <PriceTag price={item.price} />
      </div>
    </article>
  );
}

type DripEntryProps = {
  item: MenuItem;
};

export function DripEntry({ item }: DripEntryProps) {
  return (
    <div className="drip-entry anim-item">
      <div className="drip-content">
        <div className="drip-text-side">
          <h3 className="drip-name-ar">{item.nameAr}</h3>
          <span className="drip-name-en">{item.nameEn}</span>
        </div>
        <div className="drip-price-side">
          <span className="val">{item.price}</span>
          <Image src="/images/saudi-riyal.svg" className="currency-gold-pure" alt="" width={40} height={40} />
        </div>
      </div>
      <div className="drip-bottom-line" />
    </div>
  );
}
