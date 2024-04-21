import NavBar from "@/components/template/navbar/NavBar"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main className="mt-[100px] flex min-h-[calc(100vh-300px)] flex-col text-white [&_section]:min-h-[100vh] [&_section]:p-24">
                {children}
            </main>
        </>
    )
}
