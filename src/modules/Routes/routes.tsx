import React from "react";
import { Routes, Route } from "react-router-dom";
import StylePage from "../StylePage/stylePage";
import PrincipalPage from "../PrincipalPage/PrincipalPage";

export default function RouterApp() {
    return(
        <Routes>
            <Route path="/" element={<PrincipalPage/>}/>
            <Route path="/Estilos" element={<StylePage/>}/>
        </Routes>
    )
}
