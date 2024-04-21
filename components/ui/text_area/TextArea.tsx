type TextAreaProps = {
    id: string
    label: string
    name: string
    placeholder: string
    required: boolean
    className?: string
}

export default function TextArea({
    id,
    name,
    label,
    placeholder,
    required,
    className,
}: TextAreaProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <label htmlFor={id} className="text-lg text-manta-signal-white">
                {label}
            </label>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                className="text-md max-h-[200px] min-h-[100px] resize-none rounded-md border-2 p-2 tracking-wider text-black focus:outline-1 focus:outline-manta-cool-grey"
            />
        </div>
    )
}
