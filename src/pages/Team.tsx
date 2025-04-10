
import { Card, CardContent } from "@/components/ui/card";
import { TeamMembersList } from "@/components/team/TeamMembersList";
import { useState } from "react";

export default function Team() {
  const [members] = useState([
    {
      id: 1,
      name: "Sophie Martin",
      role: "Senior Analyst",
      email: "sophie.martin@example.com",
      phone: "+33 6 12 34 56 78",
      team: "Competitive Intelligence",
      assignedCompetitors: ["Bloomberg ESG", "JPM Fusion"],
      avatar: ""
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Intelligence Manager",
      email: "thomas.dubois@example.com",
      phone: "+33 6 23 45 67 89",
      team: "Competitive Intelligence",
      assignedCompetitors: ["S&P Market Intelligence", "FactSet"],
      avatar: ""
    },
    {
      id: 3,
      name: "Camille Bernard",
      role: "Product Analyst",
      email: "camille.bernard@example.com",
      phone: "+33 6 34 56 78 90",
      team: "Product",
      assignedCompetitors: ["Rimes", "Clarity AI"],
      avatar: ""
    },
    {
      id: 4,
      name: "Alexandre Petit",
      role: "Market Analyst",
      email: "alexandre.petit@example.com",
      phone: "+33 6 45 67 89 01",
      team: "Marketing",
      assignedCompetitors: [],
      avatar: ""
    },
    {
      id: 5,
      name: "Julie Laurent",
      role: "Strategy Manager",
      email: "julie.laurent@example.com",
      phone: "+33 6 56 78 90 12",
      team: "Management",
      assignedCompetitors: [],
      avatar: ""
    }
  ]);
  
  const handleAddMember = () => {
    console.log("Add member clicked");
    // You can implement the logic to add a new member here
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team</h1>
        <p className="text-muted-foreground mt-1">
          Team members involved in competitive intelligence
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <TeamMembersList members={members} onAddMember={handleAddMember} />
        </CardContent>
      </Card>
    </div>
  );
}
