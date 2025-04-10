
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Calendar, Eye, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Reports() {
  const reports = [
    { 
      id: 1, 
      title: "Competitive Analysis Q1 2024", 
      type: "PPTX", 
      size: "8.4MB", 
      date: "2024-03-31",
      author: "Sophie Martin",
      description: "Detailed analysis of the competitive landscape in Q1 2024."
    },
    { 
      id: 2, 
      title: "ESG Products Benchmark", 
      type: "XLSX", 
      size: "5.1MB", 
      date: "2024-02-15", 
      author: "Thomas Dubois",
      description: "Functional comparison of key competitors' offerings."
    },
    { 
      id: 3, 
      title: "Market Pricing Evolution", 
      type: "PDF", 
      size: "3.2MB", 
      date: "2024-02-10", 
      author: "Camille Bernard",
      description: "Study on pricing trends and competitors' pricing strategies."
    },
    { 
      id: 4, 
      title: "Strategic Partnerships Analysis", 
      type: "PDF", 
      size: "4.7MB", 
      date: "2024-01-20", 
      author: "Alexandre Petit",
      description: "Study of alliances and partnerships in the financial ESG ecosystem."
    },
    { 
      id: 5, 
      title: "ESG Innovation Tech Watch", 
      type: "PPTX", 
      size: "6.3MB", 
      date: "2024-01-05", 
      author: "Sophie Martin",
      description: "Analysis of technological innovations and emerging trends."
    }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground mt-1">
          Analysis documents and competitive intelligence reports
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Available Reports</CardTitle>
            <CardDescription>Total number of documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reports.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Q1 2024 Analyses</CardTitle>
            <CardDescription>Compared to previous quarter</CardDescription>
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
            <CardTitle className="text-lg">Next Scheduled Report</CardTitle>
            <CardDescription>Publication date</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">04/15/2024</div>
            <div className="text-sm text-muted-foreground mt-2">
              Analysis of competitors' financial results
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>
            Analysis documents and competitive studies
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
                      {new Date(report.date).toLocaleDateString('en-US')}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {report.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div>{report.type}</div>
                    <div>{report.size}</div>
                    <div>By: {report.author}</div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex items-center">
                      <Download className="mr-1 h-4 w-4" />
                      Download
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
          <CardTitle>Generate a Report</CardTitle>
          <CardDescription>
            Create a new competitive intelligence report
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div className="font-medium">Competitive Analysis</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed report on recent competitor activities.
              </p>
              <Button className="w-full">Generate</Button>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="font-medium">Monthly Summary</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Summary of key developments over the month.
              </p>
              <Button className="w-full">Generate</Button>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="font-medium">Custom Report</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Create a report with specific criteria.
              </p>
              <Button className="w-full">Configure</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
