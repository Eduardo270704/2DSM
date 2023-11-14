import { Link } from "react-router-dom";
import { useLoteria } from "../../hooks";
import "./index.css";
import { mega, quina, timemania } from "../../theme/theme";

export default function Menu() {
  const { ativo, setAtivo, setTema } = useLoteria();
  return (
    <div>
      <Link
        className={ativo === "timemania" ? "botao ativo" : "botao timemania"}
        to="/timemania"
        onClick={() => {
          setAtivo("timemania");
          setTema(timemania);
        }}
      >
        Timemania
      </Link>
      <Link
        className={ativo === "megasena" ? "botao ativo" : "botao megasena"}
        to="/megasena"
        onClick={() => {
          setAtivo("megasena");
          setTema(mega);
        }}
      >
        Megasena
      </Link>
      <Link
        className={ativo === "quina" ? "botao ativo" : "botao quina"}
        to="quina"
        onClick={() => {
          setAtivo("quina");
          setTema(quina);
        }}
      >
        Quina
      </Link>
    </div>
  );
}
