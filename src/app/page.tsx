'use client'
import Image from "next/image";
import comeToAIClothe from '../assets/clothes/comeToAI.svg'
import neverStopClothe from '../assets/clothes/neverStopClothe.svg'
import doWhileClothe from '../assets/clothes/doWhileClothe.svg'
import { Clothe } from "./components/Clothe";
import { ClotheAtributes, ClotheProps } from "./components/Clothe";
import { useState } from "react";

export default function Home () {
  const [image, setImage] = useState([]);
  return (
    <div className="mt-5 mx-10 mb-8 grid grid-cols-2 grid-rows-5 gap-6 h-screen place-content-center">

      
      {/* {
        data.map((item: ClotheAtributes) => {
          console.log(item.src)
          return (
            <div key={0 + 1} className="bg-zinc900 col-start-1 row-span-4">
              <Clothe
                key={item.title} 
                clothe={item.src}
              />
            </div>  
          )
        })
      } */}

      {/* <div className="bg-zinc900 col-start-1 row-span-4">
        <Image src={neverStopClothe} alt="clothe" className="h-full"/>
      </div>
    
      <div className="bg-zinc900 col-start-2 row-span-2">
        <Image src={comeToAIClothe} alt="clothe" className="h-full" />
      </div>

      <div className="bg-zinc900 col-start-2 row-start-3 row-span-2">
        <Image src={doWhileClothe} alt="clothe" className="h-full" />
      </div> */}
    </div>
  );
}

