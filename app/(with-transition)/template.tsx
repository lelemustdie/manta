import NavBar from "@/components/template/navbar/NavBar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar withTransition />
      {children}
    </>
  );
}
