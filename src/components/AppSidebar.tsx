
import { Sidebar, SidebarContent, SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { BarChart2, Building, FileText, Globe, Newspaper, TrendingUp, Users } from "lucide-react";
export function AppSidebar() {
  const menuItems = [{
    title: "Dashboard",
    url: "/",
    icon: BarChart2
  }, {
    title: "Competitors",
    url: "/competitors",
    icon: Building
  }, {
    title: "Trends",
    url: "/trends",
    icon: TrendingUp
  }, {
    title: "News",
    url: "/news",
    icon: Newspaper
  }, {
    title: "Industry",
    url: "/industry",
    icon: Globe
  }, {
    title: "Reports",
    url: "/reports",
    icon: FileText
  }, {
    title: "Team",
    url: "/team",
    icon: Users
  }];
  return <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-xl text-white">Competitor Compass</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-sidebar-foreground opacity-60">
          © 2025 WeeFin. All rights reserved.
        </div>
      </SidebarFooter>
    </Sidebar>;
}
