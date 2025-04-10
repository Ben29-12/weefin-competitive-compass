
import { 
  Sidebar,
  SidebarContent, 
  SidebarHeader, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarGroupContent,
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { 
  BarChart2, 
  Building, 
  FileText, 
  Globe, 
  Newspaper, 
  TrendingUp, 
  Users,
  Home,
  Search,
  Database,
  MapPin,
  Calendar,
  Settings,
  User,
  UsersRound,
  LineChart,
  ChevronRight
} from "lucide-react";

export function AppSidebar() {
  const menuSections = [
    {
      label: "BUILD",
      items: [
        {
          title: "Lookalike search",
          url: "/lookalike-search",
          icon: Search
        },
        {
          title: "Bulk lookalikes",
          url: "/bulk-lookalikes",
          icon: Database
        }
      ]
    },
    {
      label: "FOCUS",
      items: [
        {
          title: "My companies",
          url: "/my-companies",
          icon: Building
        },
        {
          title: "My contacts",
          url: "/my-contacts",
          icon: Users
        }
      ]
    },
    {
      label: "ACTIVATE",
      items: [
        {
          title: "My territory",
          url: "/my-territory",
          icon: MapPin
        },
        {
          title: "Meeting prep",
          url: "/meeting-prep",
          icon: Calendar,
          badge: "BETA"
        }
      ]
    },
    {
      label: "SETTINGS",
      items: [
        {
          title: "Account",
          url: "/account",
          icon: Settings
        },
        {
          title: "User",
          url: "/user",
          icon: User
        }
      ]
    },
    {
      label: "STAFF",
      items: [
        {
          title: "Accounts",
          url: "/accounts",
          icon: UsersRound
        }
      ]
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-1">
          <div className="w-6 h-6 bg-indigo-700 rounded flex items-center justify-center text-white font-bold">T</div>
          <div className="font-bold text-xl text-indigo-700">Tamtam</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home size={18} />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>

        {menuSections.map((section, idx) => (
          <SidebarGroup key={idx}>
            <SidebarGroupLabel className="text-xs font-semibold text-gray-500">
              {section.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="flex items-center gap-2">
                        <item.icon size={18} />
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-sm">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-700 rounded-sm flex items-center justify-center text-white font-bold">T</div>
            <div className="ml-2 font-medium text-sm">TAMTAM</div>
          </div>
          <button className="text-gray-500">
            <Settings size={16} />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
