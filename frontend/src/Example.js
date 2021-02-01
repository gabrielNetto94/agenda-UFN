import React, { useState } from 'react';

//COMPONENETE = BLOCO DE ISOLADO DE HTML,CSS E JS QUE NÃO INTERFERE NA APLICAÇÃO
//PROPRIEDADA = 
//ESTADO = Informação mantida pelo componente (Imutabilidade!!)
function Teste() {
  return (
    <>
      <h1>H1</h1>
    </>
  );
}

function Example(props) {

  const [counter, setCounter] = useState(0) //useState(0) = seta valor inicial //retorna um vetor com o valor e uma função para alterar o valor

  function mais() {
    setCounter(counter + 1);
  }

  function menos() {
    setCounter(counter - 1);
  }

  return (
    //COLOCA UMA "DIV" <> </> vazia para poder retornar vários componentes e não aparecer a <div> vazia no html
    <>
      <h1>Contador = {counter}</h1>

      <button onClick={mais}>+</button>
      <button onClick={menos}>-</button>

      <h1>{props.id}</h1>
      <Teste />
    </>
  );
}

export default Example;
