import Video from "@/components/ui/video";

export default function Home() {
  return (
    <main className="flex flex-col *:h-screen *:p-24">
      <section className="relative overflow-hidden flex items-end bg-black/50">
        <Video />
        <h1 className="text-6xl font-bold">Yeni SL3</h1>
      </section>
      <section className="bg-manta-cool-grey"></section>
      <section className="bg-manta-signal-white"></section>
    </main>
  );
}
