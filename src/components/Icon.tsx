import { FC } from "react";

interface IconProps extends React.HTMLAttributes<HTMLLIElement> {
  name: string;
  iconUrl: string;
  index: number;
  handleMouseOver: (index: number) => void;
  handleMouseLeave: () => void;
  calculateTransform: (index: number) => string;
  className?: string;
}

const Icon: FC<IconProps> = ({
  name,
  iconUrl,
  index,
  handleMouseOver,
  handleMouseLeave,
  calculateTransform,
  className,
}) => {
  return (
    <li
      key={name}
      className={`list-none flex items-center justify-center w-[55px] h-[55px] transition-all duration-200 origin-[50%_100%] group hover:mx-[13px] hover:my-[0px] ${className}`}
      onMouseOver={() => handleMouseOver(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute -top-[60px] bg-black/50 text-white h-auto px-[15px] py-[5px] hidden items-center justify-center rounded group-hover:flex pointer-events-none transition-all duration-200">
        {name}
      </div>
      <img
        src={iconUrl}
        alt={name}
        className="object-cover w-full h-full transition-all duration-200"
        style={{ transform: calculateTransform(index) }}
      />
    </li>
  );
};

export default Icon;
