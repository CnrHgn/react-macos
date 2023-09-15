import { FC } from "react";

interface DesktopProps {
  children: React.ReactNode;
}

const Desktop: FC<DesktopProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Desktop;
