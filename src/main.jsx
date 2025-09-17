import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

// --- Filtrage du warning __cflb de hCaptcha ---
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0] && typeof args[0] === "string" && args[0].includes("__cflb")) {
    return; // on ignore ce message
  }
  originalConsoleError(...args);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
