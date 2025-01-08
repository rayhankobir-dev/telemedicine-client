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
import { useCartStore } from "@/store/cartStore";
import { Separator } from "@/components/ui/separator";
import EmptyCartImg from "@/assets/images/empty-cart.png";
import CartList from "@/components/medicines/cart-list";

function CartBag() {
  const { cart } = useCartStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative h-11 w-11 flex items-center justify-center text-primary rounded-xl bg-primary/10">
          <ShoppingBag size={20} />
          <span className="absolute -top-1.5 -right-1 w-6 h-5 aspect-square text-[12px] flex items-center justify-center bg-primary text-white rounded-full ml-2">
            {cart.length}
          </span>
        </button>
      </SheetTrigger>
      <SheetContent
        closeButtonClassName="absolute right-2 top-2"
        className="w-full sm:max-w-md flex flex-col justify-between p-0"
      >
        <SheetHeader className="p-4 space-y-0">
          <SheetTitle className="inline-flex items-center gap-2">
            <ShoppingBag size={20} /> Shooping Cart
          </SheetTitle>
          <SheetDescription>
            Continue shopping to add more items.
          </SheetDescription>
        </SheetHeader>
        <Separator />

        {cart.length > 0 && <CartList />}

        {cart.length === 0 && (
          <div className="flex-1 p-4">
            <div className="flex flex-col items-center">
              <img
                className="max-w-[290px] mx-auto"
                src={EmptyCartImg}
                alt=""
              />
              <h1 className="font-medium text-xl">Your cart is empty</h1>
              <p className="font-light text-sm">
                Add items to it now. Continue shooping..
              </p>
            </div>
          </div>
        )}

        <Separator />
        <SheetFooter className="px-4 pb-4">
          <div className="w-full flex flex-col gap-3">
            <div>
              <div className="flex justify-between">
                <p className="font-semibold">Total:</p>
                <p className="font-semibold">$100</p>
              </div>

              <div className="flex justify-between">
                <p>Total Discount:</p>
                <p className="line-through">$100</p>
              </div>
            </div>

            <SheetClose asChild>
              <Button className="w-full h-12">Checkout</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CartBag;
