import Image from "next/image";
import ProgressBar from "./ProgressBar";

const TechCard = ({
  cardInfo,
}: {
  cardInfo: {
    name: string;
    description: string;
    imageUrl: string;
    bgColor: string;
    progress: number;
  };
}) => {
  const { name, description, imageUrl, bgColor, progress } = cardInfo;

  return (
    <div className="grid grid-cols-[auto,1fr] gap-5 p-2.5 rounded-xl border-2
    bg-gray-100       border-gray-100       hover:bg-gray-50      hover:border-gray-100
    dark:bg-dark-200  dark:border-dark-200  dark:hover:bg-dark-300  dark:hover:border-dark-700
      transition-colors duration-200">

      {/* Image container in the first column */}
      <div className={`p-3 ${bgColor} rounded-lg flex items-center justify-center w-[80px] h-[80px]`}>
        <Image
          src={imageUrl}
          width={40}
          height={40}
          alt={`${name} logo`}
          className="object-contain"
        />
      </div>

      {/* Text and Progress Bar container in the second column */}
      <div className="space-y-2">
        <h4 className="text-lg font-medium">
          {name}
        </h4>
        <p className="text-dark-200/70 dark:text-white/70 text-sm">
          {description}
        </p>
        <ProgressBar progress={progress} color={bgColor} />
      </div>
    </div>
  );
};

export default TechCard;
