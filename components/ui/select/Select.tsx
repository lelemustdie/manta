type SelectProps = {
    id: string
    label: string
    options: string[]
    required: boolean
    className?: string
}

export default function Select({
    id,
    label,
    options,
    required,
    className,
}: SelectProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <label
                htmlFor={id}
                className="text-lg font-bold text-manta-signal-white"
            >
                {label}
            </label>
            <select
                id={id}
                required={required}
                className="text-md rounded-md border-2 px-2 py-3 tracking-wider text-black focus:outline-1 focus:outline-manta-cool-grey"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
