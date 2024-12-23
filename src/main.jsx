import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={query}>
    <App />
  </QueryClientProvider>
);
