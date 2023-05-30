import footerLogo from "../assets/footer-logo.svg"

export function Footer() {
  return (
    <div className="w-full bg-blue-700">
      <div className="w-[1120px] mx-auto py-6 flex items-center justify-between">
        <img src={footerLogo} alt="Logo footer explorer" />
        <p
          className="font-heading text-[14px] text-gray-100"
        >
          ₢ 2022 - Todos os direitos reservados
        </p>
      </div>
    </div>
  )
}