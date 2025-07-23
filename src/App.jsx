import { AppRoutes } from "./pages/routes";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "./contexts/theme-context/theme-context";
import { GlobalStyle } from "./styles/global-style";
import { HeaderBar } from "./components/header-bar";
import { StorageProvider } from "./contexts/storage-context/storage-context";
import { FilterProvider } from "./contexts/filter-context";

function App() {
  const queryClient = new QueryClient();

  return (
    
      <QueryClientProvider client={queryClient}>
        <StorageProvider>
        <ThemeProvider>
          <FilterProvider>
          <GlobalStyle />
          <BrowserRouter
                  future={{
                      v7_startTransition: true,
                      v7_relativeSplatPath: true,
                  }}>
            <HeaderBar />
            <AppRoutes /> 
          </BrowserRouter>
          </FilterProvider>
        </ThemeProvider>
      </StorageProvider>
    </QueryClientProvider>       
 )
}

export default App
