import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./routes/router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CarrinhoProvider } from "./context/CarrinhoContext"; // Importa o CarrinhoProvider

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <CarrinhoProvider>
      <RouterProvider router={router} />
    </CarrinhoProvider>
  </QueryClientProvider>
);
