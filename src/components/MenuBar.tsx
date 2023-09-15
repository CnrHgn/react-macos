import { FC } from "react";
import { Bluetooth, BatteryCharging, Volume2, Wifi } from "lucide-react";
import siriLogo from "@/assets/siri.png";
import useFormattedDate from "@/hooks/useFormattedDate";

interface MenuBarProps {}

const menuBarLinks = [
  { name: "Finder" },
  { name: "File" },
  { name: "Edit" },
  { name: "View" },
  { name: "Go" },
  { name: "Window" },
  { name: "Help" },
];

const menuBarControls = [
  {
    name: "Audio",
    icon: Volume2,
  },
  {
    name: "Bluetooth",
    icon: Bluetooth,
  },
  {
    name: "Battery",
    icon: BatteryCharging,
    text: "100%",
  },
  {
    name: "Wifi",
    icon: Wifi,
  },
  {
    name: "Siri",
    image: siriLogo,
  },
];

const MenuBar: FC<MenuBarProps> = () => {
  const formattedDate = useFormattedDate();
  return (
    <div className="w-full h-[30px] absolute top-0 left-0 flex items-center justify-between bg-[rgba(83,83,83,0.4)] backdrop-blur-2xl">
      {/* left */}
      <div className="flex items-center w-auto ml-5 justify-evenly">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png"
          alt="Apple"
          className="w-auto h-[16px]"
        />
        {menuBarLinks.map((item) => (
          <div
            key={item.name}
            className={`flex items-center h-full ml-5 text-sm text-white/95 ${
              item.name === "Finder" ? "font-extrabold" : "font-medium"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* right */}
      <div className="flex items-center w-auto gap-3 mr-5 justify-evenly">
        {menuBarControls.map((item, index) => (
          <div
            key={index}
            className="flex items-center h-full text-sm text-white/95"
          >
            {item.text && (
              <span className="flex items-center h-full mr-1 text-xs font-bold">
                {item.text}
              </span>
            )}
            {item.icon && (
              <item.icon
                className={`${
                  item.name === "Battery" ? "h-[22px]" : "h-[18px]"
                }`}
              />
            )}
            {!item.icon && item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-auto h-[20px]"
              />
            )}
          </div>
        ))}

        <div className="flex items-center h-full ml-1 text-sm font-bold text-white/95">
          {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
