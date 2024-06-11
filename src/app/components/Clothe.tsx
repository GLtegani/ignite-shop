'use client'
import { usePathname } from "next/navigation"
import Image from "next/image";

interface ClotheAtributes {
   title: string
   src: string
}

interface ClotheProps {
   clothes: ClotheAtributes[]
}

export const Clothe = ({clothes}: ClotheProps) => {
   const pathname = usePathname()
   

   if(pathname === '/') {
      clothes.map((clothe, index) => {
         <div className="bg-zinc900 col-start-1 row-span-4">
            <Image src={clothe.src} alt="clothe" className="h-full"/>
         </div>
      })
   }
}