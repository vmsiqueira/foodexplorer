export function OrderItem({quantity, title, price}) {
  return (
    <main className="flex items-center gap-3">
      <div className="w-[4.5rem] h-[4.5rem] bg-gray-100 rounded-full">
      </div>

      <div>
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-gray-100 text-[1.25rem] leading-relaxed">{quantity} x </span>
          <span className="font-heading font-bold text-gray-100 text-[1.25rem] leading-relaxed">{title}</span>
          <strong className="font-body font-normal text-gray-700 text-xs leading-relaxed" >{price}</strong>
        </div>
        
        <button 
          type="button"
          className="font-body font-normal text-red-400 text-xs leading-relaxed"
        >
          Excluir
        </button>
      </div>
    </main>
  );
}