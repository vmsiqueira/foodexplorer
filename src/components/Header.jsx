import { Receipt, SignOut } from "phosphor-react"

import { HeaderLogo } from "./HeaderLogo";
import { SearchBox } from "./SearchBox";
import { HeaderButton } from "./HeaderButton";

export function Header() {
  return(
    <div className="w-full bg-blue-700 py-6">
      <div className="w-[1120px] mx-auto flex items-center justify-between">
        <HeaderLogo />

        <a href="#">
          Meus Favoritos
        </a>

        <SearchBox />

        <HeaderButton type="button" icon={<Receipt size={32} />} title="Meus pedidos" />

        <button
          className="bg-transparent rounded-md transition-colors hover:bg-blue-900 p-2"
        >
          <SignOut size={32} />
        </button>

      </div>
    </div>
  )
}