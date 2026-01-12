import Image from "next/image";
import {
  Flame,
  Sparkles,
  MapPin,
  Star,
  Wifi,
  Waves,
  CheckCircle,
} from "lucide-react";

type Props = {
  title: string;
  location: string;
  distance: string;
  rating: string;
  price: string;
  oldPrice?: string;
  badges?: string[];
  image: string;
  featured?: boolean;
  aiPick?: boolean;
};

export default function HotelCard({
  title,
  location,
  distance,
  rating,
  price,
  oldPrice,
  badges,
  image,
  featured,
  aiPick,
}: Props) {
  return (
    <article className="bg-card border border-border hover:border-primary/50 rounded-3xl overflow-hidden flex flex-col md:flex-row transition-all group h-full">
      {/* Image */}
      <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
        {(featured || aiPick) && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1 text-xs font-bold px-2 py-1 rounded bg-background text-foreground shadow">
            {featured && <Flame size={14} />}
            {aiPick && <Sparkles size={14} className="text-primary" />}
            {featured ? "Best Deal" : "AI Pick"}
          </div>
        )}

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                {location}
                <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                {distance}
              </div>
            </div>

            <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded text-xs font-bold">
              <Star size={14} className="text-yellow-400" />
              {rating}
            </div>
          </div>

          {badges && (
            <div className="flex gap-3 mt-3 flex-wrap">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background px-2 py-1 rounded border border-border"
                >
                  <Wifi size={14} />
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-end justify-between mt-4 pt-4 border-t border-border">
          {featured && (
            <div className="text-xs text-green-400 font-medium flex items-center gap-1">
              <CheckCircle size={14} />
              Free Cancellation
            </div>
          )}

          <div className="text-right ml-auto">
            {oldPrice && (
              <p className="text-xs text-muted-foreground line-through">
                {oldPrice}
              </p>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">{price}</span>
              <span className="text-xs text-muted-foreground">/ night</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="hidden md:flex flex-col justify-center border-l border-border p-4 w-40 bg-background/50">
        <ViewDealButton />
      </div>
      {/* Mobile Action */}
      <div className="mt-4 md:hidden">
        <ViewDealButton full />
      </div>
    </article>
  );
}
function ViewDealButton({ full }: { full?: boolean }) {
  return (
    <button
      className={`${
        full ? "w-full" : "w-full"
      } bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-3xl text-sm shadow transition`}
    >
      View Deal
    </button>
  );
}
