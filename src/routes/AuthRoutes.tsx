import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import CadastrarInformacoes from "../pages/curriculo/CadastrarInformacoes";
import CadastrarExperiencia from "../pages/curriculo/CadastrarExperiencia";
import ListaExperiencia from "../pages/curriculo/ListaExperiencia";
import ListaPortfolio from "../pages/portfolio/ListaPortfolio";
import CadastrarPortfolio from "../pages/portfolio/CadastrarPortfolio";

import Layout from '../components/layout';
import { useAuth } from "../contexts/AuthContext";

const AppRoutes: React.FC = () => {
    const { authenticated, isLoading } = useAuth();

    if (isLoading) {
        return <p>Carregando...</p>;
    }   

    if (!authenticated) {
        return <Navigate to="/login" />;
    }


    return (
    <Layout>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
        <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
        <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia />} />
        <Route path="/portfolio/cadastro" element={<CadastrarPortfolio />} />
        <Route path="/portfolio/lista" element={<ListaPortfolio />} /> 
    </Routes>
    </Layout>
    )
};

export default AppRoutes;