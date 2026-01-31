import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ONama from "./pages/ONama";
import Clanovi from "./pages/Clanovi";
import Tehnika from "./pages/Tehnika";
import Kontakt from "./pages/Kontakt";
import UclaniSe from "./pages/UclaniSe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/clanovi" element={<Clanovi />} />
          <Route path="/tehnika" element={<Tehnika />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/uclani-se" element={<UclaniSe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
