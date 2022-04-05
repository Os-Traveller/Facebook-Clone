import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BasicInfoProvider } from "./ContextApi/BasicInfo";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BasicInfoProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </BasicInfoProvider>
);
