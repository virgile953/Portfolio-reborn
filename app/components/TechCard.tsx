import Image from "next/image";

const TechCard = ({
  cardInfo,
}: {
  cardInfo: {
    name: string;
    description: string;
    imageUrl: string;
    bgColor: string;
  };
}) => {
  const { name, description, imageUrl, bgColor } = cardInfo;

  return (
    <div className="flex flex-1 gap-5 p-2.5 rounded-xl border-2
    bg-gray-100       border-gray-100       hover:bg-gray-50      hover:border-gray-100
    dark:bg-dark-200  dark:border-dark-200  dark:hover:bg-dark-300  dark:hover:border-dark-700
      transition-colors duration-200">
      <div className={`p-3 ${bgColor} rounded-lg w-fit`}>
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt={`${name} logo`}
          className={`size-10`}
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">
          {name}
        </h4>
        <p className="text-dark-200/70 dark:text-white/70 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TechCard;
