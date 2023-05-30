export function Button({ type, title }) {
  return (
    <button 
      className="w-full h-12 bg-red-500 hover:bg-red-800 transition-colors rounded-md font-heading font-medium text-sm"
      type={type}
    >
      {title}
    </button>
  )
}