import React from "react";
import ReactDOM from "react-dom/client";
import { SearchProvider } from "./context/SearchContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
