export function Input({ label, type, id, placeholder }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-gray-500">
        {label}
      </label>
      <input 
        className="w-full h-12 bg-transparent border-2 px-[14px] py-3 rounded-md placeholder:text-gray-700"
        type={type} 
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}