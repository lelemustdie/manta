type FieldProps = {
    id: string
    name: string
    label: string
    type: string
    placeholder: string
    required: boolean
}

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
            <label htmlFor={id} className="text-lg text-manta-signal-white">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="text-md rounded-md border-2 p-2 tracking-wider text-black focus:outline-1 focus:outline-manta-cool-grey"
            />
        </div>
    )
}
