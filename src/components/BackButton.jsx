import { CaretLeft } from "phosphor-react"

export function BackButton() {
  return(
    <button className="flex items-center justify-center gap-2 mt-8 p-2 rounded-lg transition-colors hover:bg-blue-500">
      <CaretLeft size={24} weight="bold" />
      <span className="font-heading font-medium text-2xl">
        Voltar
      </span>
    </button>
  )
}