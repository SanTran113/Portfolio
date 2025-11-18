import tex from "../assets/canvasTex.jpg";

function Mask({
  maskImage,
  backgroundImage,
  className,
}: {
  maskImage?: string;
  backgroundImage?: string;
  className?: string;
}) {
  return (
    <div className="relative w-full h-full">
      <img
        src = {backgroundImage}
        className={`${className}`}
        style={ {
          maskImage: `url(${maskImage})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />

      <img
        src={tex}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply pointer-events-none"
      />
    </div>
  );
}

export default Mask;
