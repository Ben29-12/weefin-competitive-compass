
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { AppLayout } from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Competitors from "./pages/Competitors";
import CompetitorDetail from "./pages/CompetitorDetail";
import Trends from "./pages/Trends";
import News from "./pages/News";
import Industry from "./pages/Industry";
import Reports from "./pages/Reports";
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/competitors" element={<Competitors />} />
            <Route path="/competitor/:id" element={<CompetitorDetail />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/news" element={<News />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/team" element={<Team />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
