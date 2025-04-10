
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="p-2 border rounded-md mb-6 flex gap-2 items-center">
      <Search className="h-4 w-4 text-muted-foreground ml-1" />
      <Input
        placeholder="Rechercher un membre..."
        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        onChange={handleChange}
      />
    </div>
  );
}
