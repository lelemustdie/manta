export default function Video({
    src,
    className = "",
}: {
    src: string
    className?: string
}) {
    return (
        <video
            className={`absolute left-0 top-0 -z-[1] h-full w-full object-cover ${className}`}
            id={"video"}
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={src} type="video/mp4" />
        </video>
    )
}
