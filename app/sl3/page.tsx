import CardList from "@/components/card_list/card_list";
import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/field/Field";
import TextArea from "@/components/ui/text_area/TextArea";
import Video from "@/components/ui/video/video";
import Image from "next/image";
const cards = [
  {
    src: "/SL3.png",
    title: "SL3",
    description: [
      "Cuerpo de orca blanco",
      "Batería Hydropack 600 ligera",
      "Aleta trasera fija 2.0 (FC2) para principiantes ('Learner')",
      "Todos los pilotos",
      "Batería ligera",
    ],
  },
  {
    src: "/SL3.png",
    title: "SL3 +",
    description: [
      "Cuerpo de orca blanco",
      "Batería Hydropack 1000 de largo alcance",
      "Aleta trasera fija 2.0 (FC2) para principiantes ('Learner')",
      "Largo alcance",
    ],
  },
  {
    src: "/SL3_PRO.png",
    title: "SL3 PRO",
    description: [
      "Chasis de piel de tiburón",
      "Batería Hydropack 1000 de largo alcance",
      "Aleta trasera fija 2.0 (FC2) y aleta de 'superligera' alta eficiencia (HE2)",
      "Desde pilotos inexpertos seguros hasta expertos (conductores intermedios y profesionales)",
      "Alcance más largo",
    ],
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
      <section className="relative overflow-hidden grid grid-cols-2">
        <Image
          src="/manta5-sl3-bw.webp"
          alt="Contacto"
          className="absolute object-cover top-0 left-50 w-full h-full z-[-1]"
          width={1920}
          height={1080}
          sizes="100vw"
        />
        <div className="bg-manta-ms-black/50 p-10 rounded-lg backdrop-blur-md h-fit *:mb-4 max-w-[600px]">
          <h2 className="text-4xl text-manta-signal-white font-bold text-center mb-5">
            Contacto
          </h2>

          <Field
            label="Nombre"
            id="name"
            type="text"
            placeholder="Nombre"
            required
          />
          <Field
            label="Apellido"
            id="lastname"
            type="text"
            placeholder="Apellido"
            required
          />
          <Field
            label="Email"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
          <Field
            label="Telefono"
            id="phone"
            type="tel"
            placeholder="Telefono"
            required
          />
          <TextArea
            label="Mensaje"
            id="message"
            placeholder="Mensaje"
            required
          />
          <div className="grid place-content-end">
            <Button className="bg-manta-red">Enviar</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
