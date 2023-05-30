import logoImg from '../assets/logo-polygon.svg'

export function Logo() {
  return (
    <div className="flex items-center gap-5">
      <img src={logoImg} alt="Explorer logo polygon" />
      <strong className="text-4xl">food explorer</strong>
    </div>
  )
}