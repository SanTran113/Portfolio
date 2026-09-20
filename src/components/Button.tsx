import { Link } from "react-router-dom";

type Varient = "primary" | "fullPrimary" | "outline" | "underline";
interface ButtonProps {
  label: string;
  buttonLink?: string;
  icon?: boolean;
  varient?: Varient;
  onClick?: () => void;
}

const varientStyles: Record<Varient, string> = {
  primary:
    "text-heading2 outline-1 hover/see:visible outline-white flex flex-row justify-between items-center p-3 lg:p-4 space-y-1 hover:bg-white hover:text-[#2B2C3C]",
  fullPrimary:
    "text-contact hover:bg-white hover:text-[#2B2C3C] p-2 rounded border border-white w-full",
  outline: "",
  underline: "",
};

export default function Button({
  label,
  buttonLink,
  icon,
  varient = "primary",
  onClick,
}: ButtonProps) {
  const baseStyle = "text-white font-medium cursor-pointer";
  const classStyles = `${baseStyle} ${varientStyles[varient]}`;

  const content = (
    <>
      {label}
      {icon && (
        <i className="fi fi-rr-angle-small-right flex justify-center"></i>
      )}
    </>
  );

  // If the button has a link use Link instead
  if (buttonLink) {
    return (
      <Link data-cursor-hover to={buttonLink} className={classStyles}>
        {content}
      </Link>
    );
  }

  return (
    <>
      <button data-cursor-hover className={classStyles} onClick={onClick}>
        {content}
      </button>
    </>
  );
}
