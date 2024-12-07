import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const productCategories = [
  {
    name: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

function ProductCategorySection() {
  return (
    <section className="flex flex-col gap-4 mt-5">
      <div className="flex items-baseline justify-between">
        <h1 className="font-semibold text-lg">Product Category Section</h1>

        <Link to="/categories">
          <Button variant="link">View All</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {productCategories.map((category, index) => (
          <ProductCategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
}

function ProductCategoryCard({
  image,
  name,
  slug,
}: {
  image: string;
  name: string;
  slug: string;
}) {
  return (
    <Link
      to={`/categories/${slug}`}
      className="p-2.5 bg-primary/5 shadow-md rounded-xl"
    >
      <img src={image} alt={name} />
      <h1 className="font-medium text-lg text-center">{name}</h1>
    </Link>
  );
}

export default ProductCategorySection;
