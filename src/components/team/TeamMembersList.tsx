
import { TeamMemberCard } from "./TeamMemberCard";
import { SearchBar } from "./SearchBar";
import { TeamHeader } from "./TeamHeader";
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
  onAddMember?: () => void;
}

export function TeamMembersList({ members, onAddMember }: TeamMembersListProps) {
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
      <div className="flex justify-between items-center mb-6">
        <SearchBar onSearch={handleSearch} />
        <TeamHeader onAddMember={onAddMember} />
      </div>
      
      <div className="space-y-4">
        {filteredMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
        
        {filteredMembers.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No members found.
          </div>
        )}
      </div>
    </div>
  );
}
