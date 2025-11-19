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
    <div className="relative">
      <img
        src={backgroundImage}
        className={className}
        style={{
          maskImage: `url(${maskImage})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: `url(${maskImage})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      />

      <img
        src={tex}
        className={`absolute top-0 left-0 pointer-events-none ${className}`}
        style={{
          maskImage: `url(${maskImage})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: `url(${maskImage})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          mixBlendMode: "multiply", 
          opacity: 0.4,
        }}
      />
    </div>
  );
}

export default Mask;
