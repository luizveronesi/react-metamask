import Home from '@/pages/Home';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<Home />} />),
  { basename: import.meta.env.VITE_APP_PUBLIC_URL }
);

export default function PublicRoutes() {
  return <RouterProvider router={router} />;
}
