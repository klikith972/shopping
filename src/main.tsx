import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // IMPORTANT: You forgot this!

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
