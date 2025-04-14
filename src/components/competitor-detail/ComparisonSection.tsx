
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Competitor } from "@/data/types";

interface ComparisonSectionProps {
  competitor: Competitor;
}

export function ComparisonSection({ competitor }: ComparisonSectionProps) {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Comparison with Weefin</CardTitle>
        <CardDescription>
          Compare products, pricing, and focus areas between Weefin and {competitor.name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="products">
          <TabsList className="mb-4">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="focus">Focus Areas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products" className="space-y-4">
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead>Weefin</TableHead>
                    <TableHead>{competitor.name}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ESG Data Integration</TableCell>
                    <TableCell>Comprehensive with proprietary scoring</TableCell>
                    <TableCell>{competitor.name.includes("Bloomberg") ? "Advanced with terminal integration" : "Standard integration"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Analytics Dashboard</TableCell>
                    <TableCell>Real-time, customizable</TableCell>
                    <TableCell>Static reports with limited customization</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Climate Risk Assessment</TableCell>
                    <TableCell>AI-powered predictive modeling</TableCell>
                    <TableCell>Basic assessment tools</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="pricing" className="space-y-4">
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Pricing Model</TableHead>
                    <TableHead>Weefin</TableHead>
                    <TableHead>{competitor.name}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Subscription Tiers</TableCell>
                    <TableCell>3 flexible tiers with modular add-ons</TableCell>
                    <TableCell>{competitor.name.includes("JPM") ? "2 rigid enterprise plans" : "Complex pricing structure"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Free Trial</TableCell>
                    <TableCell>30-day full access</TableCell>
                    <TableCell>Limited demo only</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Enterprise Discount</TableCell>
                    <TableCell>Transparent volume-based pricing</TableCell>
                    <TableCell>Case-by-case negotiation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="focus" className="space-y-4">
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Focus Area</TableHead>
                    <TableHead>Weefin</TableHead>
                    <TableHead>{competitor.name}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Target Market</TableCell>
                    <TableCell>Financial institutions of all sizes</TableCell>
                    <TableCell>{competitor.name.includes("Clarity") ? "Primarily enterprise clients" : "Large financial institutions"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Industry Coverage</TableCell>
                    <TableCell>All sectors with deep coverage</TableCell>
                    <TableCell>Limited to major industries</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Geographic Focus</TableCell>
                    <TableCell>Global with emphasis on emerging markets</TableCell>
                    <TableCell>Primarily developed markets</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Key Differentiators</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Weefin offers <span className="font-medium">comprehensive documentation</span> and knowledge base</li>
                <li>Weefin provides <span className="font-medium">API-first architecture</span> for seamless integration</li>
                <li>Weefin's <span className="font-medium">customer support</span> includes dedicated account managers</li>
                <li>Visit <a href="https://weefin.com" className="text-blue-600 hover:underline">weefin.com</a> for more information</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
