
import { useParams } from "react-router-dom";
import { competitors, activityTypes } from "@/data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, MapPin, Calendar, Users, FileText, ExternalLink } from "lucide-react";

export default function CompetitorDetail() {
  const { id } = useParams<{ id: string }>();
  const competitor = competitors.find(c => c.id === id);

  if (!competitor) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Concurrent non trouvé</h2>
          <p className="text-muted-foreground">Le concurrent demandé n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{competitor.name}</h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            {competitor.description}
          </p>
        </div>
        <a
          href={competitor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center"
        >
          Visiter le site web
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Localisation</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-medium">{competitor.headquartersLocation}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fondation</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-medium">{competitor.founded}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Effectifs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-medium">{competitor.employeeCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Site web</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <a 
              href={competitor.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium text-primary hover:underline"
            >
              {new URL(competitor.website).hostname}
            </a>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Produits et Services</CardTitle>
          <CardDescription>Les offres principales de {competitor.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {competitor.keyProducts.map((product, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="font-medium mb-2">{product}</div>
                <div className="text-sm text-muted-foreground">
                  Description fictive du produit/service {product}.
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Activités récentes</CardTitle>
          <CardDescription>Derniers développements notables chez {competitor.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Toutes</TabsTrigger>
              {activityTypes.map(type => (
                <TabsTrigger key={type.value} value={type.value}>
                  {type.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {competitor.recentActivity.map(activity => (
                <div key={activity.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-medium">{activity.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(activity.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <ActivityBadge type={activity.type} />
                    {activity.impact && <ImpactBadge impact={activity.impact} />}
                  </div>
                </div>
              ))}
            </TabsContent>
            
            {activityTypes.map(type => (
              <TabsContent key={type.value} value={type.value} className="space-y-4">
                {competitor.recentActivity
                  .filter(activity => activity.type === type.value)
                  .map(activity => (
                    <div key={activity.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(activity.date).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {activity.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <ActivityBadge type={activity.type} />
                        {activity.impact && <ImpactBadge impact={activity.impact} />}
                      </div>
                    </div>
                  ))}
                {competitor.recentActivity.filter(activity => activity.type === type.value).length === 0 && (
                  <div className="text-center py-6 text-muted-foreground">
                    Aucune activité de type {type.label} enregistrée.
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notes et documents</CardTitle>
          <CardDescription>Fichiers et analyses internes sur {competitor.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">Analyse stratégique - {competitor.name}</div>
                  <div className="text-sm text-muted-foreground">PDF, 2.4MB • Mis à jour le 05/03/2024</div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">Benchmark produits - {competitor.name}</div>
                  <div className="text-sm text-muted-foreground">XLSX, 1.8MB • Mis à jour le 12/02/2024</div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">Présentation commerciale - {competitor.name}</div>
                  <div className="text-sm text-muted-foreground">PPTX, 5.6MB • Mis à jour le 20/01/2024</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
