export default function Video({ src }: { src: string }) {
    return (
        <video
            className="absolute left-0 top-0 -z-[1] h-full w-full object-cover"
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
