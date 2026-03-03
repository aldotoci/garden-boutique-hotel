import Header from "@/components/Header";
import AuthModals from "@/components/AuthModals";
import AdvanceSearch from "@/components/AdvanceSearch";

export default function ServicePage() {
  return (
    <div className="rts__main">
      <Header />
      <div className="rts__section">
        <div className="container">
          <h1>Service</h1>
          <p>This page mirrors the Laravel service layout. Content to be ported.</p>
        </div>
      </div>
      <AdvanceSearch />
      <AuthModals />
    </div>
  );
}

