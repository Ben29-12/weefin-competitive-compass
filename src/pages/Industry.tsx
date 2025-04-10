
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, BarChart, LineChart, Clock } from "lucide-react";

export default function Industry() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analyse de l'Industrie</h1>
        <p className="text-muted-foreground mt-1">
          Aperçu du paysage ESG financier et des dynamiques du marché
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Taille du marché</CardTitle>
            <CardDescription>Marché global des solutions ESG</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">$15.6B</div>
            <div className="text-sm text-muted-foreground">
              Estimation 2024
            </div>
            <div className="flex items-center space-x-1 text-emerald-600 text-sm mt-2">
              <span className="font-medium">+18.4%</span>
              <span>vs. année précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Croissance prévue</CardTitle>
            <CardDescription>TCAC sur 5 ans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">16.8%</div>
            <div className="text-sm text-muted-foreground">
              2024-2029
            </div>
            <div className="h-2 bg-slate-100 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '68%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <div>Estimation basse: 12.5%</div>
              <div>Estimation haute: 22.3%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Régulation</CardTitle>
            <CardDescription>Impact réglementaire</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">Élevé</div>
            <div className="text-sm text-muted-foreground">
              Dernière mise à jour: Mars 2024
            </div>
            <div className="flex items-center space-x-1 text-amber-600 text-sm mt-2">
              <Clock className="h-4 w-4" />
              <span>Nouvelles directives UE attendues Q3 2024</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Parts de marché</CardTitle>
              <PieChart className="h-5 w-5 text-muted-foreground" />
            </div>
            <CardDescription>
              Répartition estimée du marché des solutions ESG
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              Graphique de parts de marché (placeholder)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Croissance par segment</CardTitle>
              <BarChart className="h-5 w-5 text-muted-foreground" />
            </div>
            <CardDescription>
              Taux de croissance par type de solution ESG
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              Graphique de croissance par segment (placeholder)
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Évolution des investissements</CardTitle>
            <LineChart className="h-5 w-5 text-muted-foreground" />
          </div>
          <CardDescription>
            Flux d'investissements dans les technologies ESG (2018-2024)
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            Graphique d'évolution des investissements (placeholder)
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Segments de marché</CardTitle>
          <CardDescription>
            Principales catégories de solutions ESG
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Données ESG", growth: 22.4, description: "Collecte et fourniture de données ESG brutes" },
              { name: "Analyses & Scoring", growth: 19.8, description: "Solutions d'évaluation et notation ESG" },
              { name: "Reporting & Conformité", growth: 25.6, description: "Outils de génération de rapports réglementaires" },
              { name: "Intégration de portefeuille", growth: 18.2, description: "Solutions d'intégration ESG dans la gestion d'actifs" },
              { name: "Mesure d'impact", growth: 14.5, description: "Outils de mesure d'impact et d'empreinte" },
              { name: "Risk Management", growth: 17.3, description: "Solutions de gestion des risques ESG" },
            ].map((segment, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="font-medium mb-1">{segment.name}</div>
                <p className="text-sm text-muted-foreground mb-2">{segment.description}</p>
                <div className="flex items-center space-x-1 text-emerald-600 text-sm">
                  <span className="font-medium">+{segment.growth}%</span>
                  <span>TCAC</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
