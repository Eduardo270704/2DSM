import { styled } from "styled-components";

export default function Carregando() {
  return (
    <Sld className="principal-carregando">
      <H3>Carregando...</H3>
    </Sld>
  );
}

const Sld = styled.div`
.principal-carregando {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

const H3 = styled.h3``;
