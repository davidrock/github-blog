import { QueryClientProvider } from 'react-query';
import { queryClient } from './services';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </>
  );
}

export default App;
