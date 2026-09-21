import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Varient = "primary" | "fullPrimary";
interface ButtonProps {
  label: string;
  buttonLink?: string;
  icon?: boolean;
  varient?: Varient;
  onClick?: () => void;
}

const varientStyles: Record<Varient, string> = {
  primary:
    "relative text-heading2 outline-white flex flex-row justify-between items-center p-3 lg:p-4 hover:text-[#2B2C3C]",
  fullPrimary:
    "relative text-contact hover:text-[#2B2C3C] p-2 border-white w-full",
};

export default function Button({
  label,
  buttonLink,
  icon,
  varient = "primary",
  onClick,
}: ButtonProps) {
  const baseStyle = "text-white font-medium cursor-pointer rounded border";
  const classStyles = `${baseStyle} ${varientStyles[varient]}`;
  const [isHovering, setIsHovering] = useState(false);

  const content = (
    <>
      {label}
      {icon && (
        <i className="fi fi-rr-angle-small-right flex items-center justify-center"/>
      )}
    </>
  );


  const buttonBg = (
    <motion.span
      className="absolute inset-0 bg-white -z-10"
      initial={false}
      animate={{ opacity: isHovering ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
    />
  );

  // If the button has a link use Link instead
  if (buttonLink) {
    return (
      <Link
        data-cursor-hover
        to={buttonLink}
        className={classStyles}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {content}
        {buttonBg}
      </Link>
    );
  }

  return (
    <>
      <button
        data-cursor-hover
        className={classStyles}
        onClick={onClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {content}
        {buttonBg}
      </button>
    </>
  );
}
