import Link from "next/link";

const ViewMoreButton = () => {
  return (
    <div className="my-4 flex justify-center">
      <Link href="/shop" passHref>
        <button className="border border-black px-6 py-2 text-black transition duration-300 ease-in-out hover:bg-black hover:text-white">
          VIEW MORE
        </button>
      </Link>
    </div>
  );
};

export default ViewMoreButton;
