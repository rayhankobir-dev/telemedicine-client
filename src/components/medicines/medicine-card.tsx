import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Napa from "@/assets/images/medicines/napa.webp";

interface MedicineCardProps {
  name: string;
  mrp: number;
  discount: number;
  generic: string;
  company: string;
  strength: string;
  dosageForm: string;
}

function MedicineCard({
  name,
  mrp,
  discount,
  generic,
  company,
  strength,
  dosageForm,
}: MedicineCardProps) {
  const discountedPrice = mrp - discount;
  const discountedPercentage = (discount / mrp) * 100;

  return (
    <Link
      to=""
      className="relative flex flex-col justify-between border border-primary/20 hover:border-primary/50 shadow hover:shadow-lg rounded-2xl overflow-hidden cursor-pointer duration-300"
    >
      <div className="absolute top-0 left-3 z-10 p-1 bg-primary font-semibold text-white text-[10px] rounded-b">
        <span>{discountedPercentage.toFixed(0)}%</span>
        <p>OFF</p>
      </div>

      <div className="max-h-[180px] overflow-hidden">
        <img
          className="w-full max-w-[200px] mx-auto aspect-square object-cover object-center scale-110 hover:scale-125 transition-all duration-300"
          src={Napa}
          alt={name}
        />
      </div>

      <div className="flex-1 flex flex-col justify-between p-3">
        <div>
          <h1 className="font-semibold text-sm hover:text-primary">
            {name} ({dosageForm}) <span className="opacity-70">{strength}</span>
          </h1>
          <p className="text-sm opacity-70">{generic}</p>
          <p className="text-sm opacity-70">{company}</p>
        </div>

        <div className="flex items-end justify-between mt-3">
          <div className="flex flex-col">
            <p className="inline-flex items-center font-light text-sm line-through">
              ৳{mrp}
            </p>

            <p className="inline-flex items-center font-semibold">
              ৳{discountedPrice}
            </p>
          </div>

          <button className="h-10 w-fit flex items-center gap-1.5 px-3 bg-primary/10 hover:bg-primary/90 border border-primary/50 font-medium text-primary hover:text-white rounded-md duration-300">
            <ShoppingBag size={18} />
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}

export default MedicineCard;
