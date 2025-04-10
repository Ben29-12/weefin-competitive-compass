
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { news, competitors } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown, ExternalLink, Filter, Newspaper, Search } from "lucide-react";

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [competitorFilter, setCompetitorFilter] = useState<string | null>(null);

  // Get unique categories
  const categories = [...new Set(news.flatMap(item => item.categories))];

  const filteredNews = news
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => !categoryFilter || item.categories.includes(categoryFilter))
    .filter(item => !competitorFilter || item.relatedCompetitors.includes(competitorFilter));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Actualités</h1>
        <p className="text-muted-foreground mt-1">
          Dernières actualités pertinentes pour notre veille concurrentielle
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher dans les actualités..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {categoryFilter || "Filtrer par catégorie"}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setCategoryFilter(null)}>
                Toutes les catégories
              </DropdownMenuItem>
              {categories.map(category => (
                <DropdownMenuItem 
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {competitorFilter 
                  ? competitors.find(c => c.id === competitorFilter)?.name
                  : "Filtrer par concurrent"}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setCompetitorFilter(null)}>
                Tous les concurrents
              </DropdownMenuItem>
              {competitors.map(competitor => (
                <DropdownMenuItem 
                  key={competitor.id}
                  onClick={() => setCompetitorFilter(competitor.id)}
                >
                  {competitor.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredNews.length > 0 ? (
          filteredNews.map(item => (
            <Card key={item.id}>
              <CardContent className="p-0">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="min-w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Newspaper className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div>
                        <h3 className="text-lg font-medium leading-tight">{item.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                          <span className="text-sm text-muted-foreground">{item.source}</span>
                          <span className="text-sm text-muted-foreground">
                            {new Date(item.date).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">{item.summary}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.categories.map(category => (
                          <span 
                            key={category} 
                            className="px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded-full text-xs"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      
                      {item.relatedCompetitors.length > 0 && (
                        <div>
                          <div className="text-sm font-medium mb-1">Concurrents mentionnés:</div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedCompetitors.map(id => {
                              const competitor = competitors.find(c => c.id === id);
                              return competitor ? (
                                <Link 
                                  key={id}
                                  to={`/competitor/${id}`}
                                  className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs inline-flex items-center"
                                >
                                  {competitor.name}
                                  <ChevronDown className="h-3 w-3 ml-0.5 rotate-90" />
                                </Link>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-1 flex items-center justify-between">
                        <a 
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium inline-flex items-center hover:underline"
                        >
                          Lire l'article complet
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                        
                        <Button variant="outline" size="sm">
                          Sauvegarder
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">Aucune actualité trouvée</h3>
            <p className="text-muted-foreground mt-1">Ajustez vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
}
