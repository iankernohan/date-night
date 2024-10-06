import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Food from "./Food";
import Home from "./Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/food",
          element: <Food />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

//Deploy:
//firebase deploy --only hosting
