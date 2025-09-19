"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCounterStore } from "./store";
import Card from "./components/Card";

// UTILIZANDO O ESTADO FORA DO COMPONENTE

const logCount = () =>{
  const countt = useCounterStore.getState().count
  console.log(countt)
}

export default function Home() {

  const[resultado, setResultado] = useState(0);

  const count = useCounterStore((state) => state.count);

  // FUNÇÕES SÍNCRONAS (NÃO ESPERAM A RESPOSTA DA API)

  

   // FUNÇÕES ASSÍNCRONAS (ESPERAM A RESPOSTA DA API)

  const incrementAsyncr = useCounterStore((state) => state.incrementAsync);
  const decrementAsyncr = useCounterStore((state) => state.decrementAsync);


  function formBhaskara(a:number, b:number, c:number) : number {
    let x:number;
    let cima:number;

    cima = (( b*-1 ) - Math.sqrt( (b**2) - (4*a*c) ));
    x = cima / (2*a)

    return x;
  }
  const handleShowResult = () => {
    setResultado(formBhaskara(1, -5, 6))
  }

  useEffect( () => {
    logCount();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-40">
        {/* <h1 className="text-center">{resultado}</h1>
        <p className="text-center">Tentando aprender bhaskara com type</p>
        <button className={'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'} onClick={handleShowResult}>Alterar Resultado</button>
        
    {/* CRIANDO A MESMA COISA, PORÉM COM ZUSTAND AGORA */}
      {/* <p className="text-center bg-gray-800 text-white font-bold">Utilizando zustand</p>
      <h1 className="text-center">{count}</h1>
      <div className="flex flex-row gap-5 justify-center mb-16">
        <button className="rounded-2xl p-2.5 bg-purple-700 text-white cursor-pointer" onClick={incrementAsyncr}>Aumentar</button>
        <button className="rounded-2xl p-2.5 bg-blue-900 text-white cursor-pointer" onClick={decrementAsyncr}>Diminuir</button>
      </div> */} 
      
      <Card/>

    </div>
  );
}
