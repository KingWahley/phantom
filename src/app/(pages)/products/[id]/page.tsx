"use client";

import { useParams } from "next/navigation";
import { products } from "@/components/shop/products";
import NavBar from "@/components/shared/NavBar/NavBar";
import Footer from "@/components/shared/Footer/Footer";
import ImageRoll from "@/components/productDetail/imageRoll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import DeliveryReturns from "@/components/productDetail/deliveryReturns";
import ProductCard from "@/components/shared/productCard";

export default function ProductDetail() {
  const { id } = useParams();

  // I'm finding the product based on the id
  const product = products.find((product) => product.id === id);

  // incase product is not found or wrong product is entered
  if (!id) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl py-8 text-center">
        <h2 className="text-xl font-bold">Product Not Found</h2>
        <p>The product you are looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <ImageRoll product={product} />
      <div className="mb-10 mt-5 flex flex-row items-start justify-between px-5 sm:px-20">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="sm:mr-5">
            <h1 className="text-lg font-bold">{product.title}</h1>
            <p className="text-sm capitalize">{product.description}</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm">{product.price}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:mt-0 sm:flex-row sm:items-start">
          <div className="mb-3 flex flex-wrap sm:mb-0 sm:mr-5 sm:flex-row">
            {["XS", "S", "M", "L", "L+"].map((size) => (
              <div className="mb-2 pr-1 sm:mb-0" key={size}>
                <button className="border border-black px-2 py-1 text-[10px] text-black transition duration-300 ease-in-out hover:bg-black hover:text-white">
                  {size}
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start sm:items-center">
            <button className="bg-black px-6 py-2 text-xs text-white shadow-lg transition duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black">
              ADD TO BAG
            </button>
            <input
              type="text"
              placeholder="SIZE GUIDE"
              className="mt-5 border-b border-black bg-transparent text-xs placeholder:text-black focus:outline-none"
            />
          </div>

          <div className="mt-3 sm:ml-4 sm:mt-0">
            <FontAwesomeIcon icon={faHeart} size="sm" />
          </div>
        </div>
      </div>

      <div className="mb-10 flex flex-col items-start justify-between border-t border-gray-300 md:flex-row md:p-20">
        <div className="mt-5 px-6 md:mt-0 md:w-[50%]">
          <p className="font-bold">Description</p>
          <p className="text-sm">{product.detail}</p>
        </div>
        <div className="md:w-[50%]">
          <DeliveryReturns />
        </div>
      </div>
      <p className="px-5">WE THINK YOU WILL LOVE</p>
      <div className="mb-10 grid w-full grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(0, 4).map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
