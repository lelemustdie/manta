import Link from "next/link";
import Image from "next/image";

export default function Template({ children }: { children: React.ReactNode }) {
    return <>
    <nav className="bg-manta-ms-black border-b-2 border-manta-red flex flex-row justify-between items-center px-[50px] py-[30px] fixed top-0 left-0 w-full z-10">
        <h1>LOGO</h1>
        <div className="text-white text-[20px] flex flex-row gap-10  *:duration-300">
            <Link className="hover:text-manta-dark-grey" href="/">Home</Link>
            <Link className="hover:text-manta-dark-grey" href="/about">About</Link>
            <Link className="hover:text-manta-dark-grey" href="/contact">Contact</Link>
        </div>
    </nav>
    {children}

        <footer className="bg-manta-ms-black grid grid-cols-4 text-white font-light justify-items-center  items-stretch *:">
            <div>
                <Image src={'https://via.placeholder.com/150'} width={400} height={400} alt="logo"/>

            </div>
            <div className='flex flex-col'>
                <h1>Nuestros Productos</h1>
                <Link href={''}>SL3</Link> {/*sl3*/}
                <Link href={''}>SL3+</Link> {/*sl3+*/}
                <Link href={''}>SL3 PRO</Link> {/*sl3pro*/}
            </div>
            <div className="flex flex-col">
                <h1>Sobre Nosotros</h1>
                <Link href={''}>Historia</Link>
                <Link href={''}>Sustentabilidad</Link>
            </div>
            <div className="flex flex-col">
                <h1>Ayuda</h1>
                <Link href={''}>FAQS</Link> {/*FAQS*/}
            </div>

        </footer>
    </>
}