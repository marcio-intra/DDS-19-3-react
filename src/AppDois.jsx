
// Conteudo da aula de hoje é sobre Props

import { useState } from 'react';
import './App.css';
import ShowUserName from './components/ShowUserName';
import Time from './components/Time';
import ListaCantor from './components/ListaCantor';

function AppDois() {
  const [count, setCount] = useState(0)

  const nj = 10;
  const titulo = true;

  //const nome = "Cris";
  //const [name] = useState("Ney");
  
  const [cantores] = useState([
    {
      id: 1, 
      nome: "Amado Batista", 
      genero: "Pop",
      premiado: false,
    },
    {
      id: 2, 
      nome: "Supla", 
      genero: "Rock",
      premiado: false,
    },
    {
      id: 3, 
      nome: "Wesley Safadão", 
      genero: "Sertanejo",
      premiado: true,
    }
  ]);

  return (
    <>
      {/* Renderização de componente com props */}
      {/* <ShowUserName name={nome} shirt='7' /> */}

      {/* Props com desistruração */}
      {/* <Time nome='Palmeiras' estado='SP' posicao={1} campeao={true}/>
      <Time nome='Santos' estado='SP' posicao={2} campeao={true}/>
      <Time nome='Corinthians' estado='SP' posicao={3} campeao={false}/> */}

      {/* Renderização de lista e passagem de props para componentes */}
      {/* {
        cantores.map((cantor) => (
          <ListaCantor 
            key={cantor.id} 
            cantor={cantor.nome} 
            genero={cantor.genero} 
            premiado={cantor.premiado}
          />
        ))
      } */}
      <h2 
        style={
          nj > 5  
            ? {color:"green", backgroundColor:"yellow", fontSize:"30px"} 
            : {color:"red", backgroundColor:"blue", fontSize:"30px"}
          }
      >
        Este CSS é dinâmico
      </h2>
      <h2
        style={
          nj < 5  
            ? {color:"green", backgroundColor:"yellow", fontSize:"30px"} 
            : {color:"red", backgroundColor:"blue", fontSize:"30px"}
        }
      >
        Este CSS também é dinâmico
      </h2>
      
      <h1
        className={
        titulo ? "titulo-incrivel" : "texto-paia"
      }
      >Título incrível pra teste</h1>
    </>
  )
}

export default AppDois
