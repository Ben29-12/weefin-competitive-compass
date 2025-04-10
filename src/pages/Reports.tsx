
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Calendar, Eye, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Reports() {
  const reports = [
    { 
      id: 1, 
      title: "Analyse concurrentielle Q1 2024", 
      type: "PPTX", 
      size: "8.4MB", 
      date: "2024-03-31",
      author: "Sophie Martin",
      description: "Analyse détaillée du paysage concurrentiel au premier trimestre 2024."
    },
    { 
      id: 2, 
      title: "Benchmark produits ESG", 
      type: "XLSX", 
      size: "5.1MB", 
      date: "2024-02-15", 
      author: "Thomas Dubois",
      description: "Comparaison fonctionnelle des offres des principaux concurrents."
    },
    { 
      id: 3, 
      title: "Évolution des prix du marché", 
      type: "PDF", 
      size: "3.2MB", 
      date: "2024-02-10", 
      author: "Camille Bernard",
      description: "Étude sur les tendances de prix et les stratégies tarifaires des concurrents."
    },
    { 
      id: 4, 
      title: "Analyse des partenariats stratégiques", 
      type: "PDF", 
      size: "4.7MB", 
      date: "2024-01-20", 
      author: "Alexandre Petit",
      description: "Étude des alliances et partenariats dans l'écosystème ESG financier."
    },
    { 
      id: 5, 
      title: "Veille technologique innovation ESG", 
      type: "PPTX", 
      size: "6.3MB", 
      date: "2024-01-05", 
      author: "Sophie Martin",
      description: "Analyse des innovations technologiques et tendances émergentes."
    }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rapports</h1>
        <p className="text-muted-foreground mt-1">
          Documents d'analyse et rapports de veille concurrentielle
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Rapports disponibles</CardTitle>
            <CardDescription>Nombre total de documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reports.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Analyses Q1 2024</CardTitle>
            <CardDescription>Comparatif vs. trimestre précédent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+3</div>
            <div className="flex items-center space-x-1 text-emerald-600 text-sm mt-2">
              <span className="font-medium">+25%</span>
              <span>vs. Q4 2023</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Prochain rapport prévu</CardTitle>
            <CardDescription>Date de publication</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15/04/2024</div>
            <div className="text-sm text-muted-foreground mt-2">
              Analyse des résultats financiers des concurrents
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rapports récents</CardTitle>
          <CardDescription>
            Documents d'analyse et études concurrentielles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className="min-w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{report.title}</h3>
                    <div className="text-sm text-muted-foreground">
                      {new Date(report.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {report.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div>{report.type}</div>
                    <div>{report.size}</div>
                    <div>Par: {report.author}</div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" />
                      Aperçu
                    </Button>
                    <Button size="sm" className="flex items-center">
                      <Download className="mr-1 h-4 w-4" />
                      Télécharger
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Générer un rapport</CardTitle>
          <CardDescription>
            Créer un nouveau rapport de veille concurrentielle
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div className="font-medium">Analyse concurrentielle</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Rapport détaillé sur les activités récentes des concurrents.
              </p>
              <Button className="w-full">Générer</Button>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="font-medium">Synthèse mensuelle</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Résumé des principales évolutions du mois.
              </p>
              <Button className="w-full">Générer</Button>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="font-medium">Rapport personnalisé</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Créer un rapport avec des critères spécifiques.
              </p>
              <Button className="w-full">Configurer</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
