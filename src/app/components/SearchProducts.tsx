import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

export const SearchProducts = () => {
   return (
      <div className="relative flex items-center">
         <MagnifyingGlass size={20} className="absolute z-10 ml-5" />
         <input className="py-3 pl-12 w-80 rounded-full bg-zinc900 text-zinc500" type="text" placeholder="Buscar produtos..." />
      </div>
   )
}