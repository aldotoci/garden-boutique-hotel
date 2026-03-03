import OffcanvasMenu from "@/components/OffcanvasMenu";
import Header from "@/components/Header";
import AuthModals from "@/components/AuthModals";
import Footer from "@/components/Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      {children}
      <Footer />
      <AuthModals />
    </>
  );
}
