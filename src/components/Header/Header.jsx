import { Link } from "react-router-dom";
import * as S from "./styled"
import linkedin from "../../assets/link.png"
import git from "../../assets/git.png"
import eu1 from "../../assets/eu1.jpg"

export default function Header() {
  return (
    <S.Header>
        <S.BoxLogo>
          <img src={eu1} alt="" />
          <h2>David</h2>
          <p>Front-end Developer</p>
        </S.BoxLogo>
        <S.BoxMenu>
            <ul>
                <li><Link  to="/">Inicio</Link></li>
                <li><Link to="/sobre">Sobre mim</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
            </ul>
        </S.BoxMenu>
        <S.BoxIcon>
          <a href=""><img src={git} alt="" /></a>
          <a href=""><img src={linkedin} alt="" /></a>
        </S.BoxIcon>

    </S.Header>
  )
}