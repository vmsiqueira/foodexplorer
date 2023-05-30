export function HeaderButton({ type, icon, title }) {
  return (
    <button 
      className="w-[216px] h-12 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-800 transition-colors rounded-md font-heading font-medium text-sm"
      type={type}
    >
      {icon || null}
      {title}
    </button>
  )
}