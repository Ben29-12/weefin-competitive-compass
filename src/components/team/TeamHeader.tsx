
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface TeamHeaderProps {
  onAddMember?: () => void;
}

export function TeamHeader({ onAddMember }: TeamHeaderProps) {
  return (
    <div>
      <Button className="flex items-center gap-1" onClick={onAddMember}>
        <UserPlus className="h-4 w-4" />
        Add member
      </Button>
    </div>
  );
}
