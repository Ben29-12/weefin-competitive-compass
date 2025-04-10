
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

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
        
        <div className="flex flex-col sm:flex-row gap-y-1 gap-x-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="h-4 w-4 mr-1" />
            {member.email}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="h-4 w-4 mr-1" />
            {member.phone}
          </div>
        </div>
        
        {member.assignedCompetitors.length > 0 && (
          <div>
            <div className="text-sm font-medium mb-1">Concurrents suivis:</div>
            <div className="flex flex-wrap gap-1">
              {member.assignedCompetitors.map((comp, idx) => (
                <span 
                  key={idx} 
                  className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex gap-2 md:flex-col">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Mail className="h-4 w-4" />
          <span className="hidden md:inline">Email</span>
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <MessageCircle className="h-4 w-4" />
          <span className="hidden md:inline">Message</span>
        </Button>
      </div>
    </div>
  );
}
