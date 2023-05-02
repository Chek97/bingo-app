import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { CreatePage, MainPage, PlayPage } from "../pages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
        path: "/create",
        element: <CreatePage />,
    },
    {
        path: "/play",
        element: <PlayPage />,
    },
 ]);

export const AppRouter = () => {
  return (<RouterProvider router={router} />)
}
