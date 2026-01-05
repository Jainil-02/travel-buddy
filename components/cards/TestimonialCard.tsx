import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  image: string | StaticImageData;
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({
  image,
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <p className="italic text-muted-foreground mb-6">&ldquo;{quote}&ldquo;</p>
      <div className="flex items-center gap-3 border-t pt-4">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
}
