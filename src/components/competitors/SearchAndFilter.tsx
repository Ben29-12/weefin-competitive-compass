
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Filter, 
  Search 
} from "lucide-react";
import { ActivityType } from "@/data/types";

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activityFilter: string | null;
  setActivityFilter: (filter: string | null) => void;
  activityTypes: ActivityType[];
}

export function SearchAndFilter({ 
  searchTerm, 
  setSearchTerm, 
  activityFilter, 
  setActivityFilter,
  activityTypes
}: SearchAndFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name or description..."
          className="pl-8 hover:border-blue-500 focus:border-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
          >
            <Filter className="h-4 w-4" />
            {activityFilter 
              ? activityTypes.find(t => t.value === activityFilter)?.label
              : "Filter by activity"}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            className="hover:bg-blue-50" 
            onClick={() => setActivityFilter(null)}
          >
            All activities
          </DropdownMenuItem>
          {activityTypes.map(type => (
            <DropdownMenuItem 
              key={type.value}
              className="hover:bg-blue-50"
              onClick={() => setActivityFilter(type.value)}
            >
              {type.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
