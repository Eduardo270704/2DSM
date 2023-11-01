import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-megasena.png";

export default function Megasena() {
  const { megasena } = useLoteria();

  return (
    <div className="mega-bloco-principal">
      <div className="mega-bloco-loteria">
        <img src={trevo} alt="Megasena" />
        <span className="mega-nome-loteria">MEGA-SENA</span>
      </div>
      <div className="mega-bloco-direita">
        Estimativa de prêmio do próximo concurso. Sorteio em
        {megasena.dataApuracao}
      </div>
      <div className="mega-bloco-estimativa">{megasena.valorEstimadoProximoConcurso}</div>
    </div>
  );
}
