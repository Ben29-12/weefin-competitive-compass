
import { cn } from "@/lib/utils";

export function SidebarLogo() {
  return (
    <img 
      src="/lovable-uploads/c264fcb2-6fdd-4874-9bec-c4042a86e991.png" 
      alt="Weefin Logo" 
      className={cn(
        "h-10 w-auto", 
        "opacity-80 hover:opacity-100 transition-opacity duration-300"
      )} 
    />
  );
}
