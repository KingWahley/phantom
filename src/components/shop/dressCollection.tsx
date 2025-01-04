import Image from "next/image";

interface DressItemProps {
  title: string;
  image: string;
}

const DressItem: React.FC<DressItemProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center shadow-sm">
      <Image
        src={image}
        alt={title}
        width={230}
        height={330}
        className="object-cover"
      />
      <h2 className="py-4 text-center text-sm font-bold capitalize">{title}</h2>
    </div>
  );
};

export default DressItem;
