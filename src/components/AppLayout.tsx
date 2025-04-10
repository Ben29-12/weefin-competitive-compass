
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { Menu, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="flex items-center p-3 border-b bg-white sticky top-0 z-10">
            <SidebarTrigger className="text-gray-500" />
            <Input 
              type="text" 
              placeholder="Search for a company..." 
              className="ml-4 max-w-xs bg-gray-50 border-gray-200"
            />
            <div className="ml-auto">
              <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-full">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
          <div className="p-0">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
