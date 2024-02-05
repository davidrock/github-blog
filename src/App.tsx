import { QueryClientProvider } from 'react-query';
import { queryClient } from './services';
import { Blog } from './pages/Blog';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Blog />
      </QueryClientProvider>
    </>
  );
}

export default App;
