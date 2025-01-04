import Image from "next/image";
import img from "../../public/images/icons8-vlc.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-[90%] lg:w-[50%]">
        <div className="relative h-[150px] animate-bounce">
          <Image
            src={img}
            alt="sample"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
            className="object-contain"
          />
        </div>
        <p className="text-center font-someTypeMono text-3xl font-bold">
          Site under construction...
        </p>
      </div>
    </div>
  );
}
