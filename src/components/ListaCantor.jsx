import React from 'react';

const ListaCantor = (props) => {
   return (
    <div>
        <h2>ID: {props.id} <br/> Nome artista: {props.nome}</h2>
         <h3>Genero musical: {props.genero}</h3>
        {props.premiado && <h3>Ja ganhou um Gremmy</h3>
        || <h3>Nunca ganhou um Gremmy</h3>
        }
    </div>
  )
}

export default ListaCantor;