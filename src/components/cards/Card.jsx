import React from "react";

export default function Card({titulo, imagem, descricao}) {
  return (
    <S.Card>
        <h2>{titulo}</h2>
        <img src={imagem} alt="" />
        <p>{descricao}</p>
        <button>Vercel</button>
        <button>GitHub</button>
    </S.Card>
  )
}
