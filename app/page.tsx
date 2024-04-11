import CardList from "@/components/card_list/card_list";
import Card from "@/components/ui/card/card";
import Video from "@/components/ui/video/video";
import ScrollToTop from "@/components/scrolltotop/scroll_to_top";
const cards = [
  {
    src: "/SL3.png",
    title: "Card 1",
    description: ["Description 1", "Description 2", "Description 3"],
  },
  {
    src: "/SL3.png",
    title: "Card 2",
    description: ["Description 1", "Description 2", "Description 3"],
  },
  {
    src: "/SL3_PRO.png",
    title: "Card 3",
    description: ["Description 1", "Description 2", "Description 3"],
  },
];

export default function Home() {
  return (
      <>
          <main className="flex flex-col *:h-screen *:p-24 text-white">
              <section className="relative overflow-hidden flex items-end bg-black/25">
                  <Video/>
                  <h1 className="text-6xl font-bold">Yeni SL3</h1>
              </section>
              <section className="bg-manta-light-grey">
                  <CardList list={cards}/>
              </section>
              <section className="bg-manta-signal-white"></section>
          </main>
          <ScrollToTop></ScrollToTop></>


  );
}
