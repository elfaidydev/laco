import type { MenuSection as MenuSectionType } from "@/data/menu";
import { CinemaCard, DripEntry, MasterCard } from "./MenuCards";

type MenuSectionProps = {
  section: MenuSectionType;
};

export function MenuSection({ section }: MenuSectionProps) {
  const isSweets = section.theme === "sweets";
  const isCold = section.theme === "cold";

  const renderItems = () => {
    if (section.layout === "list") {
      return (
        <div className="drip-royal-list stagger-container">
          {section.items.map((item) => (
            <DripEntry key={item.id} item={item} />
          ))}
        </div>
      );
    }

    if (section.layout === "slider") {
      return (
        <div className="horizontal-snap-slider stagger-container">
          {section.items.map((item) => (
            <MasterCard key={item.id} item={item} theme="cold" />
          ))}
        </div>
      );
    }

    return (
      <div className={`items-grid stagger-container ${isSweets ? "sweets-theme" : ""}`}>
        {section.items.map((item) => (
          isSweets ? (
            <CinemaCard key={item.id} item={item} />
          ) : (
            <MasterCard key={item.id} item={item} theme={isCold ? "cold" : "default"} />
          )
        ))}
      </div>
    );
  };

  return (
    <section id={section.id} className="menu-section">
      <h2 className="section-title">{section.title}</h2>
      {renderItems()}
    </section>
  );
}
