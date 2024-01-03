import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { useRouter } from "next/router";

const ProductList = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <div className="container py-4 ">
        <ul className="grid grid-cols-4 gap-6">
          {products.length > 0 &&
            products.map((item: any) => (
              <li
                key={item.id}
                onClick={() => {
                  router.push(`/products/${item.id}`);
                }}
              >
                <div className="rounded-md border h-full hover:scale-[1.025] hover:shadow-xl cursor-pointer p-2">
                  <img
                    className="rounded-t-md w-full object-contain aspect-square"
                    src={item.image}
                    alt="product"
                  />

                  <div className="p-2">
                    <p className="text-xs text-slate-600 uppercase leading-7">
                      {item.category}
                    </p>
                    <p className="text-lg font-bold ">{item.title}</p>

                    <p className="text-bold text-xl tracking-wide mt-2">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="">
          <DrawerHeader>
            <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
    </>
  );
};

export default ProductList;
