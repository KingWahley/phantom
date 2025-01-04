import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  detail: string;
  detailImage: string[];
}

export default function ImageRoll({ product }: { product: Product }) {
  return (
    <div className="">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
        }}
        className="mt-4"
      >
        {product.detailImage.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Detail view ${index + 1}`}
              width={300}
              height={400}
              className="cursor-pointer rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={400}
            className="cursor-pointer object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
