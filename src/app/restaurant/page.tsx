import Header from "@/components/Header";
import AuthModals from "@/components/AuthModals";
import AdvanceSearch from "@/components/AdvanceSearch";

export default function RestaurantPage() {
  return (
    <div className="rts__main">
      <Header />
      <div className="rts__section">
        <div className="container">
          <h1>Restaurant</h1>
          <p>This page mirrors the Laravel restaurant (resturant.blade.php) layout. Content to be ported.</p>
        </div>
      </div>
      <AdvanceSearch />
      <AuthModals />
    </div>
  );
}

