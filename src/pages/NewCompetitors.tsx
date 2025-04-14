import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Plus, X, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample suggested competitors data
const suggestedCompetitors = [
  {
    id: "sc1",
    name: "GreenFinance Pro",
    description: "Sustainable investment platform focused on ESG portfolios and green bonds.",
    relevance: "high",
    keyProducts: ["ESG Scoring", "Green Investments", "Sustainability Reporting"],
    reason: "Rising competitor in the sustainable finance space with innovative ESG scoring methodology"
  },
  {
    id: "sc2",
    name: "InvestEco",
    description: "Digital investment manager specializing in environmental impact portfolios.",
    relevance: "medium",
    keyProducts: ["Impact Investing", "Carbon Footprint Analysis", "Climate Risk Assessment"],
    reason: "Gaining market share with their carbon footprint analysis tools"
  },
  {
    id: "sc3",
    name: "BlueWater Capital",
    description: "Financial services firm focused on ocean conservation investments and blue economy.",
    relevance: "medium",
    keyProducts: ["Ocean Conservation Funds", "Sustainable Fishing Investments", "Blue Bonds"],
    reason: "First-mover advantage in blue economy financial products"
  },
  {
    id: "sc4",
    name: "CircularFund",
    description: "Investment firm specializing in circular economy businesses and waste reduction.",
    relevance: "high",
    keyProducts: ["Circular Economy ETF", "Waste Reduction Metrics", "Supply Chain Analysis"],
    reason: "Rapidly expanding client base with their circular economy focus"
  }
];

export default function NewCompetitors() {
  const [competitors, setCompetitors] = useState(suggestedCompetitors);

  const handleTrack = (id: string) => {
    setCompetitors(competitors.filter(comp => comp.id !== id));
    // In a real app, this would add the competitor to the tracked list
  };

  const handleDismiss = (id: string) => {
    setCompetitors(competitors.filter(comp => comp.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">New Competitors</h1>
        <p className="text-muted-foreground mt-1">
          Discover and track new competitors in your industry
        </p>
      </div>

      {competitors.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {competitors.map((competitor) => (
            <Card 
              key={competitor.id} 
              className="overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                        {competitor.name}
                      </CardTitle>
                      <CardDescription>Suggested competitor</CardDescription>
                    </div>
                  </div>
                  <Badge 
                    className={
                      competitor.relevance === "high" 
                        ? "bg-red-100 text-red-800 hover:bg-red-100" 
                        : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                    }
                  >
                    {competitor.relevance === "high" ? "High relevance" : "Medium relevance"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="py-2">
                <p className="text-sm text-muted-foreground mb-3">
                  {competitor.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {competitor.keyProducts.map((product, index) => (
                    <span key={index} className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
                      {product}
                    </span>
                  ))}
                </div>
                <div className="bg-muted/30 p-3 rounded-md mt-2">
                  <h4 className="text-sm font-medium mb-1">Why it's suggested</h4>
                  <p className="text-sm text-muted-foreground">{competitor.reason}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between bg-muted/30 p-4">
                <Button 
                  onClick={() => handleDismiss(competitor.id)}
                  variant="outline"
                  className="text-sm hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                >
                  <X className="mr-1 h-4 w-4" />
                  Dismiss
                </Button>
                <Button 
                  onClick={() => handleTrack(competitor.id)}
                  className="text-sm bg-sidebar-primary hover:bg-sidebar-primary/90"
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Track competitor
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted/20 rounded-lg">
          <div className="w-16 h-16 bg-blue-100 mx-auto rounded-full flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-medium">No suggested competitors</h3>
          <p className="text-muted-foreground mt-1 mb-4 max-w-md mx-auto">
            We're constantly analyzing your industry to find relevant new competitors
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <ExternalLink className="mr-1 h-4 w-4" />
            Browse industry database
          </Button>
        </div>
      )}
    </div>
  );
}
