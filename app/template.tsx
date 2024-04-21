import "./styles.css"
import ScrollToTop from "@/components/scrolltotop/scroll_to_top"
import Footer from "@/components/template/footer/Footer"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <ScrollToTop></ScrollToTop>
            <Footer />
        </>
    )
}
