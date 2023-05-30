import { Logo } from "../components/Logo";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  return(
    <div className="h-screen max-w-[1120px] mx-auto flex flex-1 justify-between items-center">
      <Logo />
      <div className="min-w-[476px] flex flex-col items-center bg-blue-700 px-16 py-16 rounded-[16px]">
        <h2 className="font-heading font-medium text-[2rem] leading-[1.5rem] mb-8">
          Faça o login
        </h2>
        <form className="w-full flex flex-col gap-8">
          <Input label="Email" type="email" id="email" placeholder="example@email.com" />

          <Input label="Senha" type="password" id="password" placeholder="************" />

          <Button type="submit" title="Entrar" />

          <a
            className="font-heading font-medium text-sm text-center" 
            href="#"
          >
            Criar uma conta
          </a>
        </form>
      </div>
    </div>
  )
}