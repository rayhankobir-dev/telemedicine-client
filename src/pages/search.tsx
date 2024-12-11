import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import MedicineList from "@/components/medicines/medicine-list";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  return (
    <section className="w-full  mx-auto py-5">
      <div className="flex gap-4">
        <div className="w-[300px] max-h-fit my-2 border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-3 py-2">
            <h2 className="font-medium text-lg opacity-80">Filter</h2>
            <Button variant="ghost" className="text-primary">
              Clear
            </Button>
          </div>
          <Separator />
          <div className="p-5">
            <RadioGroup className="space-y-2" defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1" className="font-light">
                  Under ৳500
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2" className="font-light">
                  ৳500 - ৳1000
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3" className="font-light">
                  ৳1000 - ৳2000
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compacted" id="r4" />
                <Label htmlFor="r4" className="font-light">
                  Over ৳2000
                </Label>
              </div>
            </RadioGroup>
          </div>
          <Separator />
          <div className="p-5 space-y-2.5">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="h-[18px] w-[18px] rounded" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none opacity-70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Renata Limited
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="h-[18px] w-[18px] rounded" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none opacity-70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                The ACME Laboratories Ltd.
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="h-[18px] w-[18px] rounded" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none opacity-70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                ACI Limited
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center gap-2 mb-3 px-1.5">
            <h2 className="font-light text-lg">
              Showing all results for <strong>{keyword}</strong>
              <span className="text-base"> (1000+ items)</span>
            </h2>
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

          <MedicineList isTitleShow={false} />
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
