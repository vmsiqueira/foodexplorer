export function TableRow() {
  return(
    <tr>
      <td className="flex items-center justify-start px-6 py-4 gap-2 border-blue-400">
        <div className="h-2 w-2 rounded-full bg-red-500"></div>
        <span>Pendente</span>
      </td>
      <td className="border-[1px] border-blue-400 px-6 py-4">
        00000000004
      </td>
      <td className="border-[1px] border-blue-400 px-6 py-4">
        1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá
      </td>
      <td className="border-[1px] border-blue-400 px-6 py-4">
        20/05 às 18h
      </td>
    </tr>
  )
}