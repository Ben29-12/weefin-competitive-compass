
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
    <div className="flex items-center gap-2 w-full">
      <div className="relative flex-1">
        <Search className="absolute left-2 top-1.5 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="pl-7 h-8 text-sm hover:border-blue-500 focus:border-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-1 h-8"
          >
            <Filter className="h-3.5 w-3.5 mr-1" />
            {activityFilter 
              ? activityTypes.find(t => t.value === activityFilter)?.label
              : "Filter"}
            <ChevronDown className="h-3.5 w-3.5" />
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

