import logoImg from '../assets/logo-polygon.svg'

export function HeaderLogo() {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-7" 
        src={logoImg} 
        alt="Explorer logo polygon" 
      />
      <strong className="text-2xl">food explorer</strong>
    </div>
  )
}