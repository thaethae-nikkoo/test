import ReactDOM from "react-dom/client";

import "./index.css";
import Router from "./router";
import { ThemeContextProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <Router />
  </ThemeContextProvider>
);
