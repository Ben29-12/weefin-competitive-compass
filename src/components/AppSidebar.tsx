import { Sidebar, SidebarContent, SidebarHeader, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { BarChart2, Building, Users, Star } from "lucide-react";
import { SidebarLogo } from "./SidebarLogo";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const menuItems = [{
    title: "Dashboard",
    url: "/",
    icon: BarChart2
  }, {
    title: "Tracked Competitors",
    url: "/competitors",
    icon: Building
  }, {
    title: "New Competitors",
    url: "/new-competitors",
    icon: Star
  }, {
    title: "Team",
    url: "/team",
    icon: Users
  }];
  
  return <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-xl text-white">Tamtam Competitor Analysis </div>
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
      <SidebarFooter className="p-4 flex flex-col items-center justify-center">
        <div className="text-xs text-sidebar-foreground opacity-60 mb-2">© 2025 Tamtam. All rights reserved.</div>
        <SidebarLogo />
      </SidebarFooter>
    </Sidebar>;
}
