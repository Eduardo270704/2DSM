import { useContext } from "react";
import { Contexto } from "../contexts";
import Megasena from "../components/megasena";
import Lotofacil from "../components/lotofacil";
import "./index.css";

export default function Principal() {
  const { megasena } = useContext(Contexto);
  return (
    <div>
      {megasena.dataApuracao ? (
        <div className="principal-bloco">
          <Megasena />
          <Lotofacil />
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
