import { Blog } from '@pages/Blog';
import { Post } from '@pages/Post/Post';
import { createBrowserRouter, useRouteError } from 'react-router-dom';

function MyFallbackComponent() {
  let error = useRouteError();
  console.error(error);
  return (
    <div role="alert" className="bg-blue p-12 rounded-lg m-10">
      <p>Something went wrong:</p>
    </div>
  );
}

export const routes = createBrowserRouter([
  {
    path: '/github-blog',
    element: <Blog />,
    errorElement: <MyFallbackComponent />,
  },
  {
    path: '/post',
    element: <Post />,
    errorElement: <MyFallbackComponent />,
  },
]);
