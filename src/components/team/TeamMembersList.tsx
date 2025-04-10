
import { TeamMemberCard } from "./TeamMemberCard";
import { SearchBar } from "./SearchBar";
import { useState } from "react";

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

interface TeamMembersListProps {
  members: TeamMember[];
}

export function TeamMembersList({ members }: TeamMembersListProps) {
  const [filteredMembers, setFilteredMembers] = useState(members);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredMembers(members);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const filtered = members.filter(member => 
      member.name.toLowerCase().includes(lowercaseQuery) || 
      member.role.toLowerCase().includes(lowercaseQuery) ||
      member.team.toLowerCase().includes(lowercaseQuery) ||
      member.email.toLowerCase().includes(lowercaseQuery)
    );
    
    setFilteredMembers(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      
      <div className="space-y-4">
        {filteredMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
        
        {filteredMembers.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            Aucun membre trouvé.
          </div>
        )}
      </div>
    </div>
  );
}
