import Link from "next/link";
import Image from "next/image";

export default function Template({ children }: { children: React.ReactNode }) {
    return <>
    <nav className=" bg-transparent border-b-2 border-manta-red flex flex-row justify-between items-center px-[50px] py-[30px] fixed top-0 left-0 w-full z-10">
        <Link href={'/home'}>LOGO</Link>
        <div className="text-white text-[16px] flex flex-row gap-10  *:duration-300">
            <Link className="hover:text-manta-dark-grey" href="/sl3">SL3</Link>
            <Link className="hover:text-manta-dark-grey" href="/listaprecios">LISTA DE PRECIOS</Link>
            <Link className="hover:text-manta-dark-grey" href="/contact">CONTACTO</Link>
        </div>
    </nav>
    {children}

        <footer className="bg-manta-ms-black grid grid-cols-4 text-white font-light justify-items-center  items-stretch *:">
            <div>
                <Image src={'https://via.placeholder.com/150'} width={400} height={400} alt="logo"/>

            </div>
            <div className='flex flex-col gap-y-1.5'>
                <h1 className="font-medium">Nuestros Productos</h1>
                <Link href={'/sl3'}>SL3</Link> {/*sl3 y lista de precios*/}
                <Link href={'/listaprecios'}>Lista de precios</Link> {/*sl3+*/}

            </div>
            <div className="flex flex-col gap-y-1.5">
                <h1 className="font-medium">Sobre Nosotros</h1>
                <Link href={'/nosotros'}>Nosotros</Link>
                <Link href={'/sustentabilidad'}>Sustentabilidad</Link>
            </div>
            <div className="flex flex-col gap-y-1.5">
                <h1 className="font-medium">Ayuda</h1>
                <Link href={'/faqs'}>FAQS</Link> {/*FAQS*/}
                <Link href={'/contact'}>Contacto</Link> {/*FAQS*/}
            </div>

        </footer>
    </>
}