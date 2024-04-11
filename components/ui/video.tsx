export default function Video() {
  return (
    <video className="h-screen -z-[1] absolute top-0 left-0" autoPlay loop muted>
      <source src="/bg-video.mp4" type="video/mp4" />
    </video>
  );
}
