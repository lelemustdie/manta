import QuoteIcon from "@/assets/icons/quote_icon"

export default function Quote({
    quote,
    author,
    role,
}: {
    quote: string
    author: string
    role: string
}) {
    return (
        <div className="rounded-md bg-manta-light-grey p-10 shadow-md flex flex-col gap-3">
            <QuoteIcon className="size-10 fill-manta-red" />
            <p className="text-manta-ms-black text-2xl sm:text-xl ml-4">{quote}</p>
            <div className="self-end">
                <h5 className="text-3xl sm:text-2xl font-bold text-manta-ms-black">
                    {author}
                </h5>
                <p className="text-manta-ms-black">{role}</p>
            </div>
        </div>
    )
}
