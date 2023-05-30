import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TableRow } from "../components/TableRow";

export function Orders() {
  return (
    <>
      <Header />

      <div 
        className="max-w-[1120px] h-full mx-auto"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-medium text-[32px] my-8">
            Pedidos
          </h2>

          <button className="font-heading font-bold text-md p-3 rounded-lg transition-colors hover:bg-blue-500">
            &lt; Voltar
          </button>
        </div>

        <div className="min-h-[580px] mb-[3.2rem] overflow-auto">
          <table className="w-full mx-auto text-left border-blue-400 border-[1px] border-collapse">
            <thead>
              <tr>
                <th className="border-[1px] border-blue-400 border- px-6 py-[21px]">Status</th>
                <th className="border-[1px] border-blue-400 px-6 py-[21px]">Código</th>
                <th className="border-[1px] border-blue-400 px-6 py-[21px]">Detalhamento</th>
                <th className="border-[1px] border-blue-400 px-6 py-[21px]">Data e Hora</th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  )
}