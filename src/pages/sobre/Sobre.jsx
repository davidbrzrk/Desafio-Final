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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus eaque ad voluptatem, itaque dicta? In dicta dignissimos recusandae maxime quas totam veniam optio beatae voluptatem similique? Voluptate, quod id!</p>
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