
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  team: string;
  assignedCompetitors: string[];
  avatar: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex-shrink-0">
        <Avatar className="h-16 w-16">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback className="text-lg">
            {member.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex-1 space-y-2">
        <div>
          <h3 className="font-medium text-lg">{member.name}</h3>
          <div className="text-muted-foreground">{member.role}</div>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Mail className="h-4 w-4 mr-1" />
          {member.email}
        </div>
      </div>
    </div>
  );
}
