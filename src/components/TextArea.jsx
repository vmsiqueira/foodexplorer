export function TextArea({ label, id, description, ...rest }) {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <label htmlFor={id} className="text-gray-500">
        {label}
      </label>
      <textarea 
        id={id} {...rest}
        className="w-full bg-transparent h-[12rem] resize-none border-2 px-[14px] py-3 rounded-md placeholder:text-gray-700"
      >
        {description}
      </textarea>
    </div>
  );
}