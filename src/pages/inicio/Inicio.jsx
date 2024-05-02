import Header from '../../components/Header/Header'
import * as S from "./styled"
import eu2quad from "../../assets/eu2quad.jpg"

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.section1>
        <S.eu2 src={eu2quad}></S.eu2>
        <p>Sou um estudante de React apaixonado por tecnologia, buscando constantemente desafios e aprendizado. Animado para explorar o React e contribuir para o avanço da tecnologia.
        </p>
      </S.section1>
    </S.Main>
  )
}