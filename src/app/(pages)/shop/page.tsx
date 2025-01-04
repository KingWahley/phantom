import { products } from "@/components/shop/products";
import ProductCard from "@/components/shared/productCard";
import NavBar from "@/components/shared/NavBar/NavBar";
import "@/components/fontawsome";
import Footer from "@/components/shared/Footer/Footer";
import ViewMoreButton from "@/components/shop/viewMoreButton";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:items-start md:justify-start">
        <h1 className="mb-5 text-center text-3xl font-bold text-gray-800 md:text-left md:text-sm">
          FILTER BY +
        </h1>
        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-row items-center justify-center text-center">
        <ViewMoreButton />
      </div>
      <Footer />
    </>
  );
}
