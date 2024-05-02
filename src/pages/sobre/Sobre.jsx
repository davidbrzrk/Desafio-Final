import React from 'react'
import Header from '../../components/Header/Header'
import * as S from "./styled"
import htmlicon from "../../assets/htmlicon.png"
import cssicon from "../../assets/cssicon.png"
import JSicon from "../../assets/JSicon.png"
import reacticon from "../../assets/reacticon.png"
import styledicon from "../../assets/styledicon.png"

export default function Sobre() {
  return (
    <S.Main>
      <Header/>
      <S.Caixa1>
      <S.Sobre>
        <h1>Sobre mim</h1>
        <p>Olá! Eu sou o David Araujo. 

         Sou um estudante de React apaixonado por tecnologia desde a infância. Minha curiosidade insaciável me impulsiona a buscar constantemente novos desafios e oportunidades de aprendizado. Estou animado para explorar o React e contribuir para o avanço da tecnologia através do meu trabalho dedicado.
        </p>
      </S.Sobre>
      <S.Habilidades>
        <h1>Habilidades</h1>
        <S.Caixa>
        <img src={htmlicon} alt="HTML5" />
        <img src={cssicon} alt="CSS" /> 
        <img src={JSicon} alt="JS" />
        <img src={reacticon} alt="React" />
        <img src={styledicon} alt="Styled Components" />
        </S.Caixa>
      </S.Habilidades>
      </S.Caixa1>
    </S.Main>
  )
}