import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  buttonLink: string;
  icon?: boolean;
}

export default function Button({ label, buttonLink, icon }: ButtonProps) {
    function handleIcon() {
        if (icon) {
            return <i className="fi fi-rr-angle-small-right flex justify-center"></i>;
        }
        else {
            return null;
        }
    }

  return (
    <>
      <Link
        to={buttonLink}
        className="text-white text-heading2 font-medium cursor-pointer outline-1 hover/see:visible 
          outline-white flex flex-row justify-between items-center p-3 lg:p-4 space-y-1 hover:bg-white hover:text-[#2B2C3C]"
      >
        {label}
        {handleIcon()}
      </Link>
    </>
  );
}
