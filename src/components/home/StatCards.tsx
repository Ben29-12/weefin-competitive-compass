
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const StatCards = () => {
  return (
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
  );
};
