import { Children } from "react";
import { createBrowserRouter } from "react-router-dom"

//Importação das Paginas
import App from "./App.jsx";
import AppDois from "./AppDois.jsx";
import PaginaErro from "./pages/PaginaErro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre.jsx";
import InfoCard from "./pages/Infocard.jsx";
import Forms from "./components/css/Forms.jsx";

// criar a variavel chamada "router" que vai gravar minhas rotas
const router = createBrowserRouter([
    {
        path:"/", // Cria um caminho ou rota para seu componente
        element: <App />, //Renderiza o caminho ou rota definido no "path"
        errorElement: <PaginaErro />,
        children: [
            {
                path:"/home", // Cria um caminho ou rota para seu componente
                element: <Home />, //Renderiza o caminho ou rota definido no "path"
            },
            {
                path:"/login", // Cria um caminho ou rota para seu componente
                element: <Login />, //Renderiza o caminho ou rota definido no "path"
            },
            {
                path:"/cadastro", // Cria um caminho ou rota para seu componente
                element: <Cadastro />, //Renderiza o caminho ou rota definido no "path"
            },
            {
                path:"/contato", // Cria um caminho ou rota para seu componente
                element: <Contato />, //Renderiza o caminho ou rota definido no "path"
            },
            {
                path:"/sobre", // Cria um caminho ou rota para seu componente
                element: <Sobre />, //Renderiza o caminho ou rota definido no "path"
            },
            {
                path:"/AppDois", // Cria um caminho ou rota para seu componente
                element: <AppDois />, //Renderiza o caminho ou rota definido no "path"
            },
            {
                path:"/informacao/:id", // Cria um caminho ou rota redirecionada para seu componente
                element: <InfoCard />, //Renderiza o caminho ou rota definido no "path"
            }
        ],
    },
]);

export default router;
