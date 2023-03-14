import { ReactNode } from "react"
import { 
    createBrowserRouter, 
    RouterProvider,
    Navigate,
    RouteObject
} from "react-router-dom"
import { AboutUsChildren, AboutUsPage } from "../AboutUs/pages/AboutUsPage"
import { CakesChildren, CakesPage } from "../Cakes/pages/CakesPage"
import { HomePage, HomeChildren } from "../Home/pages/HomePage"

interface Route {
    path: string;
    element: ReactNode;
    children?: RouteObject[];
}

const routes: Route[]  = [
    {
        path: "/",
        element: <HomePage />,
        children: HomeChildren.map((child) => ({
            path: child.path,
            element: child.element,
            caseSensitive: false,
            children: undefined
        }))
    },
    {
        path: "/cakes",
        element: <CakesPage />,
        children: CakesChildren.map((child) => ({
            path: child.path,
            element: child.element,
            caseSensitive: false,
            children: undefined
        }))
    },
    {
        path: "/aboutus",
        element: <AboutUsPage />,
        children: AboutUsChildren
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
]

const router = createBrowserRouter(routes);
  

export const AppRouter = () => {
    return (
        <RouterProvider router={ router }/>
    )
}
