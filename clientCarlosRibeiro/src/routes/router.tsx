import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Layout from "./Layout"
import ListaDeProdutosPage from "../pages/ListaDeProdutosPage";
import LoginPage from "../pages/LoginPage";
import CadastroDeProdutosPage from "../pages/CadastroDeProdutosPage";
import CarrinhoPage from "../pages/CarrinhoPage";
import ErrorPage from "../pages/ErrorPage";
import CardsDeProdutosPage from "../pages/CardsDeProdutosPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { 
                path: "", 
                element: <HomePage />,
                children: [
                    {path: ":nomeCategoria?", element: <CardsDeProdutosPage />}
                ]
            },
            { path: "listar-produtos", element: <ListaDeProdutosPage /> },
            { path: "login", element: <LoginPage /> },            
            { path: "cadastrar-produto", element: <CadastroDeProdutosPage /> },            
            { path: "carrinho", element: <CarrinhoPage /> },            
        ]
    }
]);
export default router;