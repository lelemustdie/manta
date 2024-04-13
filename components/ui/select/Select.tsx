type SelectProps = {
  id: string;
  label: string;
  options: string[];
  required: boolean;
  className?: string;
};

export default function Select({
  id,
  label,
  options,
  required,
  className,
}: SelectProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-manta-signal-white text-lg font-bold">
        {label}
      </label>
      <select
        id={id}
        required={required}
        className="border-2 rounded-md py-3 px-2 text-md text-black tracking-wider focus:outline-manta-cool-grey focus:outline-1"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
