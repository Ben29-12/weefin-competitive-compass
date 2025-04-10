
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { competitors, news, industryTrends, activityTypes } from "@/data/mockData";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { 
  BarChart2, 
  TrendingUp, 
  Users, 
  FileText, 
  BarChart, 
  PieChart, 
  ArrowUpRight,
  Calendar,
  Newspaper,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Dashboard() {
  // Get latest activities across all competitors
  const recentActivities = competitors
    .flatMap(competitor => 
      competitor.recentActivity.map(activity => ({
        ...activity,
        competitorId: competitor.id,
        competitorName: competitor.name
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const upcomingEvents = [
    { id: 1, title: "ESG Data & Tech Summit", date: "2024-05-15", location: "London", type: "conference" },
    { id: 2, title: "Bloomberg Webinar: New ESG Solutions", date: "2024-04-22", type: "webinar" },
    { id: 3, title: "Sustainable Finance Forum", date: "2024-06-10", location: "Paris", type: "conference" },
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Overview of the competitive landscape and latest developments
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tracked Competitors</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{competitors.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Major players in the sector
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Activities</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {competitors.reduce((sum, comp) => sum + comp.recentActivity.length, 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              In the last 90 days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Identified Trends</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{industryTrends.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Average impact: high
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">News</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{news.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Mentions in specialized press
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Competitor Activities</CardTitle>
            <CardDescription>
              Latest actions and significant developments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="border-b pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-medium">{activity.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(activity.date).toLocaleDateString('en-US')}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {activity.description}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-primary">
                      {activity.competitorName}
                    </div>
                    <div className="flex space-x-2">
                      <ActivityBadge type={activity.type} />
                      {activity.impact && <ImpactBadge impact={activity.impact} />}
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-right">
                <Link to="/competitors" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  View all activities
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              Industry conferences and webinars
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex items-start space-x-3">
                  <div className="min-w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    {event.location && (
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="text-right">
                <button className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-2">
                  View full calendar
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Industry Trends</CardTitle>
            <CardDescription>
              Major developments in the financial ESG sector
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {industryTrends.slice(0, 3).map(trend => (
                <div key={trend.id} className="border-b pb-3 last:border-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium">{trend.title}</div>
                    <div className="text-sm bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                      Impact: {trend.impactScore}%
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {trend.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {trend.categories.map(category => (
                      <span key={category} className="text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="text-right">
                <Link to="/trends" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  View all trends
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent News</CardTitle>
            <CardDescription>
              Latest articles relevant to our monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {news.slice(0, 4).map(item => (
                <div key={item.id} className="border-b pb-3 last:border-0">
                  <div className="font-medium mb-1">{item.title}</div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-muted-foreground">{item.source}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(item.date).toLocaleDateString('en-US')}
                    </div>
                  </div>
                  {item.relatedCompetitors.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.relatedCompetitors.map(id => {
                        const comp = competitors.find(c => c.id === id);
                        return comp ? (
                          <span key={id} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {comp.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="text-right">
                <Link to="/news" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  View all news
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Competitors Overview</CardTitle>
          <CardDescription>
            Major players in our competitive ecosystem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competitors.map((competitor) => (
              <div key={competitor.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">{competitor.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium">{competitor.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {competitor.headquartersLocation}
                    </div>
                  </div>
                </div>
                <div className="text-sm line-clamp-2 mb-3 text-muted-foreground">
                  {competitor.description}
                </div>
                <div className="mb-3">
                  <div className="text-xs text-muted-foreground mb-1">Key products:</div>
                  <div className="flex flex-wrap gap-1">
                    {competitor.keyProducts.slice(0, 2).map((product) => (
                      <span key={product} className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
                        {product}
                      </span>
                    ))}
                    {competitor.keyProducts.length > 2 && (
                      <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
                        +{competitor.keyProducts.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <Link 
                    to={`/competitor/${competitor.id}`} 
                    className="text-sm text-primary font-medium hover:underline flex items-center"
                  >
                    View full profile
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
