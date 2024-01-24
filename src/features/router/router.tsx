import { createBrowserRouter } from "react-router-dom";
import { Layout } from '../../Layout.tsx'
import { Home } from "../../pages/home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])
