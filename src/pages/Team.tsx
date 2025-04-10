
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, Plus, Search, UserPlus } from "lucide-react";

export default function Team() {
  const members = [
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
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Équipe</h1>
        <p className="text-muted-foreground mt-1">
          Membres de l'équipe impliqués dans la veille concurrentielle
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Membres de l'équipe</CardTitle>
              <CardDescription>
                Collaborateurs avec accès à l'outil de veille
              </CardDescription>
            </div>
            <Button className="flex items-center gap-1">
              <UserPlus className="h-4 w-4" />
              Ajouter un membre
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-2 border rounded-md mb-6 flex gap-2 items-center">
            <Search className="h-4 w-4 text-muted-foreground ml-1" />
            <Input
              placeholder="Rechercher un membre..."
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
                    
          <div className="space-y-4">
            {members.map((member) => (
              <div key={member.id} className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4">
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
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tableaux de bord partagés</CardTitle>
          <CardDescription>
            Tableaux de bord et rapports partagés avec l'équipe
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="dashboards">
            <TabsList className="mb-4">
              <TabsTrigger value="dashboards">Tableaux de bord</TabsTrigger>
              <TabsTrigger value="reports">Rapports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboards" className="space-y-4">
              {[
                { id: 1, name: "Vue d'ensemble concurrentielle", shared: "Toute l'équipe", lastUpdate: "Aujourd'hui" },
                { id: 2, name: "Suivi des innovations produits", shared: "Équipe Produit", lastUpdate: "Hier" },
                { id: 3, name: "Analyse des partenariats", shared: "Équipe Veille", lastUpdate: "Il y a 3 jours" }
              ].map(dashboard => (
                <div key={dashboard.id} className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <div className="font-medium">{dashboard.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Partagé avec: {dashboard.shared} • Dernière mise à jour: {dashboard.lastUpdate}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Voir</Button>
                </div>
              ))}
              
              <div className="border rounded-lg border-dashed p-4 flex justify-center items-center">
                <Button variant="outline" className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  Créer un tableau de bord
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="space-y-4">
              {[
                { id: 1, name: "Rapport mensuel - Mars 2024", shared: "Direction", date: "31/03/2024" },
                { id: 2, name: "Analyse trimestrielle", shared: "Toute l'équipe", date: "15/03/2024" }
              ].map(report => (
                <div key={report.id} className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <div className="font-medium">{report.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Partagé avec: {report.shared} • Date: {report.date}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Voir</Button>
                </div>
              ))}
              
              <div className="border rounded-lg border-dashed p-4 flex justify-center items-center">
                <Button variant="outline" className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  Créer un rapport
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <div className="text-center py-6 text-muted-foreground">
                Gérez ici les préférences de notification pour votre équipe.
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
