type FieldProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
};

export default function Field({
  id,
  name,
  label,
  type,
  placeholder,
  required,
}: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-manta-signal-white text-lg">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-2 rounded-md py-3 px-2 text-md text-black tracking-wider focus:outline-manta-cool-grey focus:outline-1"
      />
    </div>
  );
}
