
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const QuickAccess = () => {
  return (
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
  );
};
