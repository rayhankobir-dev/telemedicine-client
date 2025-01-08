import { ShoppingBag } from "lucide-react";

function DetailsCard() {
  return (
    <section className="border rounded-xl p-5">
      <h1 className="font-semibold text-xl">Napa </h1>
      <p className="font-medium text-sm opacity-70">Tablet</p>
      <p className="font-medium text-sm">Paracitamle</p>
      <p className="font-light text-sm opacity-70">
        Beximco Pharmaceuticals Ltd.
      </p>

      <div>৳190.00</div>

      <div>
        
      </div>

      <button className="w-fit flex items-center gap-1.5 font-medium text-base bg-primary text-white py-2.5 px-6 rounded-lg">
        <ShoppingBag size={20} />
        Add to Cart
      </button>
    </section>
  );
}

export default DetailsCard;
