import CardList from "@/components/card_list/card_list";
import Video from "@/components/ui/video/video";
const cards = [
  {
    src: "/SL3.png",
    title: "SL3",
    description: ["Cuerpo de orca blanco", "Batería Hydropack 600 ligera", "Aleta trasera fija 2.0 (FC2) para principiantes ('Learner')", "Todos los pilotos", "Batería ligera"],
  },
  {
    src: "/SL3.png",
    title: "SL3 +",
    description: ["Cuerpo de orca blanco", "Batería Hydropack 1000 de largo alcance", "Aleta trasera fija 2.0 (FC2) para principiantes ('Learner')", "Largo alcance"],
  },
  {
    src: "/SL3_PRO.png",
    title: "SL3 PRO",
    description: ["Chasis de piel de tiburón", "Batería Hydropack 1000 de largo alcance", "Aleta trasera fija 2.0 (FC2) y aleta de 'superligera' alta eficiencia (HE2)", "Desde pilotos inexpertos seguros hasta expertos (conductores intermedios y profesionales)", "Alcance más largo"],
  },
];

export default function Sl3() {
  return (
    <main className="flex flex-col *:p-24 *:min-h-[100vh] text-white">
      <section className="relative overflow-hidden flex items-end bg-black/25">
        <Video />
        <h1 className="text-6xl font-bold">Nueva SL3</h1>
      </section>
      <section className="bg-manta-light-grey grid place-content-center">
        <CardList list={cards} />
      </section>
      <section className="bg-manta-signal-white"></section>
    </main>
  );
}
