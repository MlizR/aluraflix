import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import PaginaBase from "./pages/PaginaBase";
import NuevoVideo from "./pages/NuevoVideo";
import NotFound from "./pages/NotFound";
import ContextProvider from "./components/context/GlobalContext";

function AppRoutes() {
  return (
    <ContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="nuevo-video" element={<NuevoVideo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default AppRoutes;
