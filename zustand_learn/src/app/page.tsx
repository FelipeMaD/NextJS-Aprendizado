"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const[resultado, setResultado] = useState(0);

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

  return (
    <div className="flex flex-col align-middle justify-center gap-40">
        <h1 className="text-center">{resultado}</h1>
        <p className="text-center">Tentando aprender bhaskara com type</p>
        <button className={'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'} onClick={handleShowResult}>Alterar Resultado</button>
        
    </div>
  );
}
