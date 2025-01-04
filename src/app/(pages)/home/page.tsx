import Hero from "@/components/home/hero";
import NavBar from "@/components/shared/NavBar/NavBar";
import Footer from "@/components/shared/Footer/Footer";
import Socials from "@/components/shared/Socials";
import ProductCard from "@/components/shared/productCard";
import { products } from "@/components/shop/products";
import collectionData from "@/components/shop/dressCollectionsData";
import DressItem from "@/components/shop/dressCollection";

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Socials />

      <Hero title="" subtitle="" imageUrl="/images/heroimage.jpg" />
      <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(0, 4).map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center bg-[#F8F3ED] py-20">
        <p className="mb-2 text-center text-sm font-bold">
          CRAFTED WITH PASSION
        </p>
        <h1 className="mb-6 text-center text-2xl font-bold">
          FOR THE ASSERTIVE WOMAN
        </h1>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {collectionData.map((dress, index) => (
            <DressItem key={index} title={dress.title} image={dress.image} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
