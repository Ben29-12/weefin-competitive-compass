
import { Competitor } from "@/data/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface DocumentsSectionProps {
  competitor: Competitor;
}

export function DocumentsSection({ competitor }: DocumentsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notes and Documents</CardTitle>
        <CardDescription>Internal files and analyses on {competitor.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <FileText className="h-6 w-6 text-primary" />
              <div>
                <div className="font-medium">Strategic Analysis - {competitor.name}</div>
                <div className="text-sm text-muted-foreground">PDF, 2.4MB • Updated on 03/05/2024</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <FileText className="h-6 w-6 text-primary" />
              <div>
                <div className="font-medium">Product Benchmark - {competitor.name}</div>
                <div className="text-sm text-muted-foreground">XLSX, 1.8MB • Updated on 02/12/2024</div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <FileText className="h-6 w-6 text-primary" />
              <div>
                <div className="font-medium">Sales Presentation - {competitor.name}</div>
                <div className="text-sm text-muted-foreground">PPTX, 5.6MB • Updated on 01/20/2024</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
