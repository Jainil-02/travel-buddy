import { Map, Star, Wifi, Coffee, Waves, PawPrint } from "lucide-react";

export default function FiltersSidebar() {
  return (
    <aside className="space-y-8">
      <MapWidget />
      <PriceRange />
      <StarRating />
      <Amenities />
    </aside>
  );
}

/* ------------------------------ */
/* Map Widget */
/* ------------------------------ */
function MapWidget() {
  return (
    <div className="relative w-full h-40 rounded-xl overflow-hidden border border-border group cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUcV_EJJ52QI7CoIVw5gjpQZV4lfmFyr51kBvNnn11dYKWoEC0jGJNZF5dE8pqTKCnNTP2c97YdcqDO0gbFaDHf2CvfpH2_aZkDs4cWZ0gRCNWF2yiS5g8IvCLDvmLATEXht3fx9S7EtxaHoDl2VLffzx-QhYANLpEoJV5smGS7Kp7jX_eQwc2RSRfjwQUnhR1zKZqhl_whwjeaRX6qGnZ9W6tnN26oeetYyLto9XzOiInZm870G8eAhsIDRGcnjP9dSyeUK-wdWs')",
        }}
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <button className="bg-background text-foreground px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
          <Map size={16} className="text-primary" />
          Show on Map
        </button>
      </div>
    </div>
  );
}

/* ------------------------------ */
/* Price Range */
/* ------------------------------ */
function PriceRange() {
  return (
    <FilterBlock title="Price Range">
      <div className="px-2">
        <div className="relative h-2 bg-muted rounded-full mb-4">
          <div className="absolute left-0 top-0 h-full w-2/3 bg-primary rounded-full" />
          <div className="absolute left-2/3 top-1/2 -translate-y-1/2 size-5 bg-background rounded-full border-2 border-primary shadow-lg cursor-pointer hover:scale-110 transition-transform" />
        </div>

        <div className="flex justify-between text-sm text-muted-foreground font-medium">
          <span>$50</span>
          <span>$800+</span>
        </div>
      </div>
    </FilterBlock>
  );
}

/* ------------------------------ */
/* Star Rating */
/* ------------------------------ */
function StarRating() {
  return (
    <FilterBlock title="Star Rating">
      <div className="space-y-3">
        <StarRow stars={5} count={124} />
        <StarRow stars={4} count={45} />
        <StarRow stars={3} count={12} />
      </div>
    </FilterBlock>
  );
}

function StarRow({ stars, count }: { stars: number; count: number }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input type="checkbox" className="size-5 accent-primary" />

      <div className="flex gap-0.5 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < stars ? "currentColor" : "none"}
            className={i < stars ? "" : "text-muted"}
          />
        ))}
      </div>

      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        ({count})
      </span>
    </label>
  );
}

/* ------------------------------ */
/* Amenities */
/* ------------------------------ */
function Amenities() {
  return (
    <FilterBlock title="Amenities">
      <div className="space-y-3">
        <Checkbox label="Free WiFi" icon={<Wifi size={16} />} checked />
        <Checkbox label="Breakfast Included" icon={<Coffee size={16} />} />
        <Checkbox label="Pool" icon={<Waves size={16} />} />
        <Checkbox label="Pet Friendly" icon={<PawPrint size={16} />} />
      </div>
    </FilterBlock>
  );
}

function Checkbox({
  label,
  icon,
  checked,
}: {
  label: string;
  icon: React.ReactNode;
  checked?: boolean;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input
        type="checkbox"
        defaultChecked={checked}
        className="size-5 accent-primary"
      />
      <span className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors text-sm">
        {icon}
        {label}
      </span>
    </label>
  );
}

/* ------------------------------ */
/* Shared Wrapper */
/* ------------------------------ */
function FilterBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      {children}
    </div>
  );
}
