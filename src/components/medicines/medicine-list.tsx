import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MedicineCard from "./medicine-card";
import { medicines } from "@/constants/medicines";

function MedicineList({ isTitleShow = true }) {
  return (
    <section>
      {isTitleShow && (
        <div className="flex justify-between items-center gap-2 py-3 px-1.5">
          <h1 className="font-medium text-xl">Medicines</h1>
          <div className="inline-flex items-center gap-2 font-light text-sm">
            Sort by:
            <Select>
              <SelectTrigger className="h-10 w-[250px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Price: High to Low</SelectItem>
                  <SelectItem value="banana">Price: Low to High</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-1">
        {medicines.map((medicine, index) => (
          <MedicineCard
            key={index}
            name={medicine.name}
            mrp={medicine.mrp}
            discount={medicine.discount}
            generic={medicine.generic}
            company={medicine.company}
            strength={medicine.strength}
            dosageForm={medicine.dosageForm}
          />
        ))}
      </div>
    </section>
  );
}

export default MedicineList;
