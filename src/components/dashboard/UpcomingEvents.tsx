
import { Calendar, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  location?: string;
  type: string;
}

export const UpcomingEvents = () => {
  const upcomingEvents: UpcomingEvent[] = [
    { id: 1, title: "ESG Data & Tech Summit", date: "2024-05-15", location: "London", type: "conference" },
    { id: 2, title: "Bloomberg Webinar: New ESG Solutions", date: "2024-04-22", type: "webinar" },
    { id: 3, title: "Sustainable Finance Forum", date: "2024-06-10", location: "Paris", type: "conference" },
  ];

  return (
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
  );
};
