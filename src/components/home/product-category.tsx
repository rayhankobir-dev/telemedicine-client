function ProductCategorySection() {
  return (
    <section className="flex flex-col gap-4 mt-5">
      <h1 className="font-semibold">Product Category Section</h1>

      <div className="grid grid-cols-4 gap-3">
        <div className="p-2.5 bg-primary/10 shadow-md rounded-xl">
          <h3>Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            optio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductCategorySection;
