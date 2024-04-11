export default function Video() {
  return (
    <video className="w-screen -z-[1] absolute top-0 left-0" id={"video"} autoPlay loop muted>
      <source src="/bg-video.mp4" type="video/mp4" />
    </video>
  );
}
