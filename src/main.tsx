import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { SessionsProvider } from "./context/SessionContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SessionsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SessionsProvider>
  </React.StrictMode>
);
