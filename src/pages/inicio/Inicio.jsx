import Header from '../../components/Header/Header'
import * as S from "./styled"
import eu2quad from "../../assets/eu2quad.jpg"

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.section1>
        <S.eu2 src={eu2quad}></S.eu2>
        <p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minus, placeat reprehenderit dolore repellat asperiores cupiditate id consequatur ipsam voluptates totam tempore. Placeat, molestias velit nulla autem adipisci cum cupiditate!
        </p>
      </S.section1>
    </S.Main>
  )
}