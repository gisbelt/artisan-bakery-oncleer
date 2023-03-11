import { 
    createBrowserRouter, 
    RouterProvider,
    Navigate
} from "react-router-dom"
import { AboutUsChildren, AboutUsPage } from "../AboutUs/pages/AboutUsPage"
import { CakesChildren, CakesPage } from "../Cakes/pages/CakesPage"
import { ContactChildren, ContactPage } from "../Contact/pages/ContactPage"
import { HomePage, HomeChildren } from "../Home/pages/HomePage"


const router = createBrowserRouter([
    {
        path: "/home",
        element: <HomePage />,
        children: HomeChildren
    },
    {
        path: "/*",
        element: <Navigate to={"/home"} />,
    },
    {
        path: "/cakes",
        element: <CakesPage />,
        children: CakesChildren
    },
    {
        path: "/aboutus",
        element: <AboutUsPage />,
        children: AboutUsChildren
    },
    {
        path: "/contact",
        element: <ContactPage />,
        children: ContactChildren
    },

])


export const AppRouter = () => {
  return (
    <RouterProvider router={ router }/>
  )
}
