import DetailsCard from "@/components/medicine/details-card";
import ImageSection from "@/components/medicine/image-section";

function MedicinePage() {
  return (
    <section className="my-3">
      <div className="grid grid-cols-2 gap-4">
        <ImageSection />
        <DetailsCard />
      </div>
    </section>
  );
}

export default MedicinePage;
