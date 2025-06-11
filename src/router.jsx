import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/Contact/Contact";
import Quotation from "./pages/Quotation/Quotation";
import About from "./pages/About/About";
import Support from "./pages/Support/Support";
import AnimatedHome from "./pages/HomePage/AnimatedPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AnimatedHome />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "devis",
        element: <Quotation />,
      },
      {
        path: "a-propos",
        element: <About />,
      },
    ],
  },
]);
