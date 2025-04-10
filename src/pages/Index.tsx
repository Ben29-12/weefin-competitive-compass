
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Building, Users, TrendingUp, Zap, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Jan",
    total: 12,
  },
  {
    name: "Feb",
    total: 18,
  },
  {
    name: "Mar",
    total: 24,
  },
  {
    name: "Apr",
    total: 28,
  },
  {
    name: "May",
    total: 22,
  },
  {
    name: "Jun",
    total: 30,
  },
  {
    name: "Jul",
    total: 36,
  },
];

export default function Index() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to WeeFin Competitive Intelligence - Your overview of the market
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">
              Tracked Competitors
            </CardTitle>
            <CardDescription>Active monitoring</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-baseline">
              <div className="text-3xl font-bold">24</div>
              <Badge className="ml-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                +2 in Q1
              </Badge>
            </div>
            <Link 
              to="/competitors" 
              className="text-sm text-primary hover:underline inline-flex items-center mt-3"
            >
              View all competitors
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">
              Active Industry Trends
            </CardTitle>
            <CardDescription>Current trends</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-baseline">
              <div className="text-3xl font-bold">7</div>
              <Badge className="ml-2 bg-amber-100 text-amber-800 hover:bg-amber-100">
                +1 this week
              </Badge>
            </div>
            <Link 
              to="/trends" 
              className="text-sm text-primary hover:underline inline-flex items-center mt-3"
            >
              View all trends
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">
              Recent News
            </CardTitle>
            <CardDescription>Collected updates</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-baseline">
              <div className="text-3xl font-bold">18</div>
              <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Last 30 days
              </Badge>
            </div>
            <Link 
              to="/news" 
              className="text-sm text-primary hover:underline inline-flex items-center mt-3"
            >
              View all news
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">
              Generated Reports
            </CardTitle>
            <CardDescription>Available documents</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-baseline">
              <div className="text-3xl font-bold">5</div>
              <Badge className="ml-2 bg-violet-100 text-violet-800 hover:bg-violet-100">
                In 2024
              </Badge>
            </div>
            <Link 
              to="/reports" 
              className="text-sm text-primary hover:underline inline-flex items-center mt-3"
            >
              View all reports
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Competitor Activities</CardTitle>
            <CardDescription>
              Monthly competitor activity monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
            <CardDescription>
              Navigate to key sections of the application
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Link 
              to="/competitors"
              className="flex items-center p-3 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Competitors</div>
                <div className="text-sm text-muted-foreground">
                  Track competitor activities and profiles
                </div>
              </div>
            </Link>
            
            <Link 
              to="/trends"
              className="flex items-center p-3 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Trends</div>
                <div className="text-sm text-muted-foreground">
                  Monitor market and industry trends
                </div>
              </div>
            </Link>
            
            <Link 
              to="/news"
              className="flex items-center p-3 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">News</div>
                <div className="text-sm text-muted-foreground">
                  Latest industry news and updates
                </div>
              </div>
            </Link>
            
            <Link 
              to="/team"
              className="flex items-center p-3 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Team</div>
                <div className="text-sm text-muted-foreground">
                  Manage team access and permissions
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
