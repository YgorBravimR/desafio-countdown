export function Input({ name, labelTitle, type, placeholder, ...props }) {
  return (
    <div {...props}>
      <label htmlFor={name}>{labelTitle}</label>
      <input
        className="block w-full bg-lightGrey text-black700 p-2 rounded-lg mt-1 focus:outline-none border-2 border-transparent focus:border-2 focus:border-indigo-500 placeholder:text-slate-500"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
