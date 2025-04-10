
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

interface TeamHeaderProps {
  title: string;
  description: string;
  onAddMember?: () => void;
}

export function TeamHeader({ title, description, onAddMember }: TeamHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </div>
      <Button className="flex items-center gap-1" onClick={onAddMember}>
        <UserPlus className="h-4 w-4" />
        Ajouter un membre
      </Button>
    </div>
  );
}
