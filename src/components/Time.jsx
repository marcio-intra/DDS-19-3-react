import React from 'react'

const Time = ({nome, estado, posicao, campeao}) => {
  return (
    <div>
        <h1>Nome do time: {nome}</h1>
        <h2>Fica no estado: {estado}</h2>
        <h2>E está na posição: {posicao}</h2>
        {/* Alternativa para definir condição como 'if' e 'else' */}
        {campeao && <h3>O time é campeão</h3>
        || <h3>O time não é campeão</h3>
        }
    </div>
  )
}

export default Time
