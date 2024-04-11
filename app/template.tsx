import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
    return <>
    <nav className="bg-manta-ms-black border-b-2 border-manta-red flex flex-row justify-between items-center px-[50px] py-[30px] fixed top-0 left-0 w-full z-10">
        <h1>LOGO</h1>
        <div className="text-white text-[16px] flex flex-row gap-3 *:duration-300">
            <Link className="hover:text-manta-dark-grey" href="/">Home</Link>
            <Link className="hover:text-manta-dark-grey" href="/about">About</Link>
            <Link className="hover:text-manta-dark-grey" href="/contact">Contact</Link>
        </div>
    </nav>
    {children}
    </>
  }