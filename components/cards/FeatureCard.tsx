import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition">
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
    </Card>
  );
}
