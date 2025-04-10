
import { useState, useEffect } from "react";
import { 
  Search, 
  Home, 
  Building, 
  Users, 
  MapPin, 
  Calendar, 
  Settings, 
  User, 
  FileText, 
  Gauge, 
  Radio, 
  Radar,
  PlusCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning!";
  if (hour < 18) return "Good afternoon!";
  return "Good evening!";
}

const Index = () => {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    // Update greeting every minute
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-medium text-gray-800 mb-8">{greeting}</h1>
      
      <div className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Quick start</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center text-primary mb-4">
                  <Search className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">Engage a specific account</h3>
                </div>
                <Input 
                  type="text" 
                  placeholder="Search for a company" 
                  className="mt-2" 
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center text-green-600 mb-4">
                  <Radar className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">Identify new accounts</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Use lookalike search to replicate your wins
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center text-amber-600 mb-4">
                  <FileText className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">Qualify & research accounts</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Add custom criteria to an account list to prioritize your efforts
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center text-purple-600 mb-4">
                  <PlusCircle className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">Build more pipeline</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Extract and enrich contacts for my pipeline generation session
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center text-blue-600 mb-4">
                  <Radio className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">Monitor my territory</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  All company & people signals
                </p>
                <p className="text-gray-400 text-sm mt-4">
                  0 news to be checked
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center text-pink-600 mb-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">
                    Prepare my meetings
                    <span className="ml-2 text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                      BETA
                    </span>
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Rock your meetings with custom insights
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-gray-700">Overview</h2>
        </div>
        <Card className="border">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Building className="h-5 w-5 mr-2 text-gray-500" />
                <h3 className="font-medium">Followed companies</h3>
              </div>
              <Link to="/competitors" className="text-sm text-blue-600 hover:underline">
                See all
              </Link>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Go", icon: "G", color: "bg-green-100" },
                { name: "Aircall", icon: "A", color: "bg-blue-100" },
                { name: "Fcuking Easy CRM", icon: "F", color: "bg-gray-100" },
                { name: "Kamsa", icon: "K", color: "bg-green-100" }
              ].map((company, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-8 h-8 ${company.color} rounded flex items-center justify-center font-medium text-gray-700`}>
                    {company.icon}
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{company.name}</span>
                    <span className="ml-2 text-xs">🇺🇸</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
