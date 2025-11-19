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
    <div
      id="mask"
      className={`${className} 
              [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] 
              bg-cover bg-center bg-no-repeat`}
      style={{
        maskImage: `url(${maskImage})`,
        WebkitMaskImage: `url(${maskImage})`,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <img
        src={tex}
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply pointer-events-none"
      />
    </div>
  );
}

export default Mask;