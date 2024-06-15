import Image from "next/image";
import { useState } from "react";

export interface ClotheAtributes {
   title: string
   src: string
}

export interface ClotheProps {
   clothe: ClotheAtributes
}

export const Clothe = ({clothe}: ClotheProps) => {
   return (
      <Image src={clothe} alt="clothe" className="h-full" width={20} height={100}/>
   )
}