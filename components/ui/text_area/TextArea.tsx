type TextAreaProps = {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  className?: string;
};

export default function TextArea({
  id,
  label,
  placeholder,
  required,
  className,
}: TextAreaProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-manta-signal-white text-lg font-bold">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        required={required}
        className="border-2 rounded-md py-3 px-2 text-md text-black tracking-wider focus:outline-manta-cool-grey focus:outline-1 resize-none min-h-[100px] max-h-[200px]"
      />
    </div>
  );
}
