import { MagnifyingGlass } from "phosphor-react"

export function SearchBox() {
  return(
    <div className="flex items-center gap-[14px] bg-blue-500 min-w-[410px] px-[14px] py-3 rounded-md">
      <MagnifyingGlass size={24} />

      <input 
        className="w-full bg-transparent outline-none"
        type="text" 
        placeholder="Busque pelas opções de prato"
      />
    </div>
  )
}