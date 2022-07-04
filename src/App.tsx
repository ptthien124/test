import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomTable from "./components/CustomTable";
import useFetch from "./hooks/useFetch";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <CustomTable />
      </div>
    </QueryClientProvider>
  );
}

export default App;
