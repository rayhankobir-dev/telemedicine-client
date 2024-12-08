import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster as SecondaryToaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <SecondaryToaster />
      <Toaster position="top-center" />
    </BrowserRouter>
  </StrictMode>
);
