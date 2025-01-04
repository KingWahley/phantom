"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <Link href={`/products/${product.id}`} passHref>
      <div
        onClick={handleClick}
        className="w-50 flex cursor-pointer flex-col items-center justify-center transition-all duration-500 md:items-start md:justify-start"
      >
        <div className="bg-#D0D3DB flex w-full items-center justify-center">
          {isLoading ? (
            <div className="flex h-60 w-60 items-center justify-center">
              {/* loading spinner */}
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-transparent"></div>
            </div>
          ) : (
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={450}
              quality={80}
              className="transition-all duration-300 hover:rounded-xl hover:shadow-md"
            />
          )}
        </div>
        <div className="mt-2 flex flex-col items-start justify-start text-left">
          <h2 className="text-md font-semibold">{product.title}</h2>
          <p className="text-sm">{product.description}</p>
          <p className="text-gray-500">{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
