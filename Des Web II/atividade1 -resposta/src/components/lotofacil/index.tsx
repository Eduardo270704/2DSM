import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-lotofacil.png";

export default function Lotofacil() {
  const { lotofacil } = useLoteria();

  const linha1: string[] = [],
    linha2: string[] = [],
    linha3: string[] = [];
  if (lotofacil.dataApuracao) {
    for (let i = 0; i < 5; i++) {
      linha1.push(lotofacil.dezenas[i]);
    }
    for (let i = 5; i < 10; i++) {
      linha2.push(lotofacil.dezenas[i]);
    }
    for (let i = 10; i < 15; i++) {
      linha3.push(lotofacil.dezenas[i]);
    }
  }

  return (
    <>
      {lotofacil.dataApuracao ? (
        <div className="principal-bloco">
          <div className="loto-bloco-principal">
            <div>
              <div className="loto-bloco-loteria">
                <img src={trevo} alt="Lotofacil" />
                <span className="loto-nome-loteria">MEGA-SENA</span>
              </div>
              <div className="loto-bloco-estimativa">
                <div className="loto-texto-estimativa">
                  Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                  {lotofacil.dataApuracao}
                </div>
              </div>
              <div className="loto-valor-estimativa">
                {lotofacil.valorEstimadoProximoConcurso.toLocaleString(
                  "pt-br",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}
              </div>
            </div>
            <div className="loto-bloco-direita">
              <div className="loto-linha-bola">
                {linha1.map((dezena) => (
                  <div className="loto-bola" key={dezena}>
                    {dezena}
                  </div>
                ))}
              </div>
              <div className="loto-linha-bola">
                {linha2.map((dezena) => (
                  <div className="loto-bola" key={dezena}>
                    {dezena}
                  </div>
                ))}
              </div>
              <div className="loto-linha-bola">
                {linha3.map((dezena) => (
                  <div className="loto-bola" key={dezena}>
                    {dezena}
                  </div>
                ))}
              </div>
              <div className="loto-texto-acumulou">
                {lotofacil.acumulado ? "ACUMULOU!" : ""}
              </div>
              <div className="loto-data-concurso">
                {`Concurso ${lotofacil.numeroDoConcurso} - ${lotofacil.dataPorExtenso}`}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
}
