import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EmptyCartImg from "@/assets/images/empty-cart.png";

function CartBag() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative h-11 w-11 flex items-center justify-center text-primary rounded-xl bg-primary/10">
          <ShoppingBag size={20} />
          <span className="absolute -top-1.5 -right-1 w-6 h-5 aspect-square text-[12px] flex items-center justify-center bg-primary text-white rounded-full ml-2">
            20
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="w-full flex flex-col justify-between p-0">
        <SheetHeader className="p-4 space-y-0">
          <SheetTitle>Shooping Cart</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex-1 p-4">
          <div className="flex flex-col items-center">
            <img className="max-w-[250px] mx-auto" src={EmptyCartImg} alt="" />
            <h1 className="font-medium text-xl">Your cart is empty</h1>
            <p className="font-light text-sm">
              Add items to it now. Continue shooping..
            </p>
          </div>
        </div>
        <Separator />
        <SheetFooter className="p-4">
          <SheetClose asChild>
            <Button className="w-full h-12">Checkout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CartBag;
