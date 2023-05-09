import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import CustomTable from './components/Table';
import History from './components/History';
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className={`w-4/5 mx-auto`}>
        <CustomTable />
        <History />
      </div>
    </QueryClientProvider>
  );
}

export default App;
