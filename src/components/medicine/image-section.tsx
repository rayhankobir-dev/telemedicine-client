import Napa from "@/assets/images/medicines/napa.webp";
import { Info } from "lucide-react";

function ImageSection() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-3 aspect-square border rounded-xl overflow-hidden">
      <img className="w-full" src={Napa} alt="" />

      <div className="absolute top-0 left-3 z-10 p-1 bg-primary font-semibold text-white text-[10px] rounded-b">
        <span>10%</span>
        <p>OFF</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex items-center gap-2 px-2 py-1 bg-red-100 text-red-500 font-light text-sm">
        <Info size={16} />
        Please provide doctor prescription
      </div>
    </div>
  );
}

export default ImageSection;
