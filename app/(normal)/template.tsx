import NavBar from "@/components/template/navbar/NavBar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="mt-[100px] flex flex-col [&_section]:p-24 [&_section]:min-h-[100vh] min-h-[calc(100vh-300px)] text-white">
        {children}
      </main>
    </>
  );
}
