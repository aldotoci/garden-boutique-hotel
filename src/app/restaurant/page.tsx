import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export default function RestaurantPage() {
  return (
    <PageShell>
      <PageHero
        title="Dining in Tirana"
        desc="Local recommendations from our team — we focus on great stays, not an on-site restaurant."
      />
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="content__subtitle mb-0">
                Garden Boutique Hotel is focused on exceptional accommodation. We
                don&apos;t operate a hotel restaurant — ask us at reception for
                trusted cafés, bistros, and dining nearby in Tirana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
