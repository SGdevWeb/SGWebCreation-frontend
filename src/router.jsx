import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Support from "./pages/Support/Support";
import AnimatedHome from "./pages/HomePage/AnimatedPage";

export const router = createBrowserRouter(
  [
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
          path: "a-propos",
          element: <About />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
