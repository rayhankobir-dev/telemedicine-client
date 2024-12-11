import SearchItemCard from "@/components/search/search-item-card";

function SearchPage() {
  return (
    <section className="w-full max-w-4xl mx-auto py-5">
      <div>
        <h2 className="font-light text-lg">
          Showing all results for <strong>napa</strong>
          <span className="text-base"> (1000+ items)</span>
        </h2>
      </div>
      <div className="grid border">
        <SearchItemCard />
      </div>
    </section>
  );
}

export default SearchPage;
