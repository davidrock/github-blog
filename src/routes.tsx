import { Blog } from '@pages/Blog';
import { Post } from '@pages/Post/Post';
import { createBrowserRouter } from 'react-router-dom';

function MyFallbackComponent() {
  return (
    <div role="alert" className="bg-blue p-12 rounded-lg m-10">
      <p>Something went wrong:</p>
    </div>
  );
}

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Blog />,
    errorElement: <MyFallbackComponent />,
  },
  {
    path: '/post',
    element: <Post />,
    errorElement: <MyFallbackComponent />,
  },
]);
