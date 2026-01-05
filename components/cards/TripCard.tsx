import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TripCardProps {
  image: string;
  title: string;
  meta: string;
  price: string;
  rating: string;
}

export default function TripCard({
  image,
  title,
  meta,
  price,
//   rating,
}: TripCardProps) {
  return (
    <Card className="min-w-[280px] md:min-w-[340px] snap-center">
      <CardContent className="p-3">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <h3 className="font-bold">{title}</h3>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{meta}</span>
          <span className="font-bold text-primary">{price}</span>
        </div>
      </CardContent>
    </Card>
  );
}
