import Video from "@/components/ui/video";
import ScrollToTop from "@/components/scrolltotop/scroll_to_top";

export default function Home() {
  return (
      <>
          <main className="flex flex-col *:h-screen *:p-24 text-white">
              <section className="relative overflow-hidden flex items-end">
                  <Video/>
                  <h1 className="text-6xl font-bold">Yeni SL3</h1>
              </section>
              <section className="bg-manta-cool-grey"></section>
              <section className="bg-manta-signal-white"></section>
          </main>
              <ScrollToTop></ScrollToTop></>


  );
}
