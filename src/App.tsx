import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Home from "./components/Home";
import { PaginationProvider } from "./contexts/paginationContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaginationProvider>
        <Home />
      </PaginationProvider>
    </QueryClientProvider>
  );
}

export default App;
