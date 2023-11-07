import { Link } from "react-router-dom";
import { useLoteria } from "../../hooks";
import "./index.css";

export default function Menu() {
  const { ativo, setAtivo } = useLoteria();
  return (
    <div>
      <Link
        className={ativo === "megasena" ? "botao ativo" : "botao megasena"}
        to="/megasena"
        onClick={() => setAtivo("megasena")}
      >
        Megasena
      </Link>
      <Link
        className={ativo === "lotofacil" ? "botao ativo" : "botao lotofacil"}
        to="/lotofacil"
        onClick={() => setAtivo("lotofacil")}
      >
        Lotofacil
      </Link>
      <Link
        className={ativo === "quina" ? "botao ativo" : "botao quina"}
        to="quina"
        onClick={() => setAtivo("quina")}
      >
        Quina
      </Link>
    </div>
  );
}
