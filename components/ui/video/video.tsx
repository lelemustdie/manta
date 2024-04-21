export default function Video({src}:{src:string}) {
  return (
    <video className="w-full h-full object-cover -z-[1] absolute top-0 left-0" id={"video"} autoPlay loop muted>
      <source src={src} type="video/mp4" />
    </video>
  );
}
