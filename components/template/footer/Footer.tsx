import Image from "next/image";
import Link from "next/link";

const FOOTER_ITEMS = [
  {
    title: "Nuestros Productos",
    links: [
      { title: "SL3", href: "/sl3" },
      { title: "Lista de precios", href: "/listaprecios" },
    ],
  },
  {
    title: "Sobre Nosotros",
    links: [
      { title: "Nosotros", href: "/nosotros" },
      { title: "Sustentabilidad", href: "/sustentabilidad" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { title: "FAQS", href: "/faqs" },
      { title: "Contacto", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black grid grid-cols-footer h-[200px] text-white font-light justify-items-center  items-stretch *:">
      <div className="flex flex-col gap-y-1.5 justify-center">
        <Image
          src={"https://via.placeholder.com/150"}
          width={150}
          height={150}
          alt="logo"
        />
      </div>
      {FOOTER_ITEMS.map(({ title, links }, containerIdx) => {
        return (
          <div
            className="flex flex-col gap-y-1.5 justify-center"
            key={`footer-col-${containerIdx}`}
          >
            <h4 className="font-medium">{title}</h4>
            {links.map(({ href, title }, index) => {
              return (
                <Link
                  href={href}
                  className="hover:text-manta-cool-grey"
                  key={`footer-item-${index}-${containerIdx}`}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        );
      })}
    </footer>
  );
}
