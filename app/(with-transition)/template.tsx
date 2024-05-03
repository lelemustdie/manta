import NavBar from "@/components/template/navbar/NavBar"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar withTransition />
            <main className="flex flex-col text-white *:h-[100vh] *:p-24 *:sm:p-5">
                {children}
            </main>
        </>
    )
}
