import Logo from "@/assets/icons/logo";
import Link from "next/link";

const NAVBAR_ITEMS = [
  { title: "SL3", href: "/sl3" },
  { title: "Lista de precios", href: "/listaprecios" },
  { title: "Contacto", href: "/contact" },
];

export default function NavBar({ withTransition = false }) {
  return (
    <nav
      className={`border-b-2 border-manta-red flex flex-row justify-between items-center px-[15%] fixed top-0 left-0 w-full z-10 font-semibold  ${
        withTransition
          ? "navbar bg-transparent "
          : "h-[100px] bg-manta-ms-black"
      }`}
    >
      <Link href={"/home"}>
        <Logo></Logo>
      </Link>
      <div className="text-white text-lg flex flex-row gap-10  *:duration-300">
        {NAVBAR_ITEMS.map(({ title, href }, index) => {
          return (
            <Link
              className="hover:text-manta-dark-grey"
              href={href}
              key={`navbar-item-${index}`}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
