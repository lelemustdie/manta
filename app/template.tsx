import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/logo";
import "./styles.css";
import ScrollToTop from "@/components/scrolltotop/scroll_to_top";

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

const NAVBAR_ITEMS = [
  { title: "SL3", href: "/sl3" },
  { title: "Lista de precios", href: "/listaprecios" },
  { title: "Contacto", href: "/contact" },
];

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="bg-changer bg-transparent border-b-2 border-manta-red flex flex-row justify-between items-center px-[15%] fixed top-0 left-0 w-full z-10 font-semibold">
        <Link href={"/home"}>
          <Logo></Logo>
        </Link>
        <div className="text-white text-lg flex flex-row gap-10  *:duration-300">
          {NAVBAR_ITEMS.map(({ title, href }) => {
            return (
              <Link className="hover:text-manta-dark-grey" href={href}>
                {title}
              </Link>
            );
          })}
        </div>
      </nav>

      {children}
      <ScrollToTop></ScrollToTop>
      <footer className="bg-black grid grid-cols-footer h-[200px] text-white font-light justify-items-center  items-stretch *:">
        <div className="flex flex-col gap-y-1.5 justify-center">
          <Image
            src={"https://via.placeholder.com/150"}
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        {FOOTER_ITEMS.map(({ title, links }) => {
          return (
            <div className="flex flex-col gap-y-1.5 justify-center">
              <h1 className="font-medium">{title}</h1>
              {links.map(({ href, title }) => {
                return (
                  <Link href={href} className="hover:text-manta-cool-grey">
                    {title}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </footer>
    </>
  );
}
