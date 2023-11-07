import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../components/megasena";
import Lotofacil from "../components/lotofacil";
import Quina from "../components/quina";
import Menu from "../components/menu";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/megasena" element={<Megasena />}></Route>
        <Route path="/lotofacil" element={<Lotofacil />}></Route>
        <Route path="/quina" element={<Quina />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
