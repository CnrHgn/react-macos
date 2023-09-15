import { FC, useState } from "react";
import icons from "@/data/icons.json";
import Icon from "./Icon"; // Adjust the import path as necessary

interface DockProps {}

const Dock: FC<DockProps> = () => {
  const [focusIndex, setFocusIndex] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setFocusIndex(index);
  };

  const handleMouseLeave = () => {
    setFocusIndex(null);
  };

  const calculateTransform = (index: number) => {
    if (focusIndex === null) return "scale(1) translateY(0px)";
    if (index === focusIndex) return "scale(1.5) translateY(-10px)";
    if (index === focusIndex - 1 || index === focusIndex + 1)
      return "scale(1.2) translateY(-6px)";
    if (index === focusIndex - 2 || index === focusIndex + 2)
      return "scale(1.1)";
    return "scale(1) translateY(0px)";
  };

  return (
    <div className="absolute w-auto h-auto -translate-x-1/2 rounded-2xl bottom-2 left-1/2">
      <div className="p-2 w-auto h-full flex items-center justify-center rounded-2xl bg-[rgba(83,83,83,0.25)] backdrop-blur-lg border border-white/10">
        {/* Icons */}
        {icons.slice(0, -1).map((icon, index) => (
          <Icon
            key={icon.name}
            name={icon.name}
            iconUrl={icon.icon_url}
            index={index}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            calculateTransform={calculateTransform}
          />
        ))}

        <div className="w-[1px] ml-3 mr-2 h-[52px] bg-white/30"></div>

        <Icon
          key={icons[icons.length - 1].name}
          name={icons[icons.length - 1].name}
          iconUrl={icons[icons.length - 1].icon_url}
          index={icons.length - 1}
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
          calculateTransform={calculateTransform}
          className="w-[48px] h-[48px]"
        />
      </div>
    </div>
  );
};

export default Dock;
