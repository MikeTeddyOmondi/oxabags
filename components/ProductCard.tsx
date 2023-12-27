import Image from "next/image";
import { Button } from "./ui/button";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export default function ProductCard({ item }: { item: any }) {
  return (
    <Link
      href={`/product/${item.slug.current}`}
      className="group aspect-square flex-none border p-2 rounded-lg cursor-pointer"
    >
      <div className="relative">
        <Image
          src={urlForImage(item.images)}
          width={200}
          height={200}
          alt={item.name}
          className="rounded-md aspect-square"
        />
        <Button
          variant="secondary"
          className="absolute shadow bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          Quick Add
        </Button>
      </div>
      <div className="pt-4 w-full">
        <h2 className="md:text-lg text-base font-medium">{item.name}</h2>
        <p className="opacity-90 text-sm">{item.category.name}</p>
        <p className="mt-3 font-medium">₹ {item.price}</p>
      </div>
    </Link>
  );
}
