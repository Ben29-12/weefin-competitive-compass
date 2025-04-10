
import { Competitor } from "@/data/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductsSectionProps {
  competitor: Competitor;
}

export function ProductsSection({ competitor }: ProductsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Products and Services</CardTitle>
        <CardDescription>Main offerings from {competitor.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {competitor.keyProducts.map((product, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="font-medium mb-2">{product}</div>
              <div className="text-sm text-muted-foreground">
                Fictional description of the product/service {product}.
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
