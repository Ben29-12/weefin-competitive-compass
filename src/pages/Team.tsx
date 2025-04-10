
import { Card, CardContent } from "@/components/ui/card";
import { TeamMembersList } from "@/components/team/TeamMembersList";
import { useState } from "react";

export default function Team() {
  const [members] = useState([
    {
      id: 1,
      name: "Sophie Martin",
      role: "Analyste Senior",
      email: "sophie.martin@example.com",
      phone: "+33 6 12 34 56 78",
      team: "Veille concurrentielle",
      assignedCompetitors: ["Bloomberg ESG", "JPM Fusion"],
      avatar: ""
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Responsable Veille",
      email: "thomas.dubois@example.com",
      phone: "+33 6 23 45 67 89",
      team: "Veille concurrentielle",
      assignedCompetitors: ["S&P Market Intelligence", "FactSet"],
      avatar: ""
    },
    {
      id: 3,
      name: "Camille Bernard",
      role: "Analyste Produit",
      email: "camille.bernard@example.com",
      phone: "+33 6 34 56 78 90",
      team: "Produit",
      assignedCompetitors: ["Rimes", "Clarity AI"],
      avatar: ""
    },
    {
      id: 4,
      name: "Alexandre Petit",
      role: "Analyste de Marché",
      email: "alexandre.petit@example.com",
      phone: "+33 6 45 67 89 01",
      team: "Marketing",
      assignedCompetitors: [],
      avatar: ""
    },
    {
      id: 5,
      name: "Julie Laurent",
      role: "Responsable Stratégie",
      email: "julie.laurent@example.com",
      phone: "+33 6 56 78 90 12",
      team: "Direction",
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
        <h1 className="text-3xl font-bold tracking-tight">Équipe</h1>
        <p className="text-muted-foreground mt-1">
          Membres de l'équipe impliqués dans la veille concurrentielle
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
