import { Link } from "react-router-dom";

interface ButtonProps {
    label: string;
    buttonLink: string;
}

export default function Button({ label, buttonLink }: ButtonProps) {
    return (
        <>
            <Link to={buttonLink} className="text-white text-heading2 font-medium cursor-pointer hover:opacity-80 hover:outline-1 hover/see:visible hover:outline-white flex flex-row justify-between items-center p-3 lg:p-4 space-y-1">
                {label}
            </Link>
        </>
    )
}