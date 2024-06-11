import Image from "next/image";
import comeToAIClothe from '../assets/clothes/comeToAI.svg'
import neverStopClothe from '../assets/clothes/neverStopClothe.svg'
import doWhileClothe from '../assets/clothes/doWhileClothe.svg'
import { Clothe } from "./components/Clothe";

export default async function Home () {
  const response = await fetch("http://localhost:5000/homeClothes")
  const data = await response.json()

  return (
    <div className="mt-5 mx-10 mb-8 grid grid-cols-2 grid-rows-5 gap-6 h-screen place-content-center">
      <div className="bg-zinc900 col-start-1 row-span-4">
        <Image src={neverStopClothe} alt="clothe" className="h-full"/>
      </div>
    
      <div className="bg-zinc900 col-start-2 row-span-2">
        <Image src={comeToAIClothe} alt="clothe" className="h-full" />
      </div>

      <div className="bg-zinc900 col-start-2 row-start-3 row-span-2">
        <Image src={doWhileClothe} alt="clothe" className="h-full" />
      </div>
    </div>
  );
}

