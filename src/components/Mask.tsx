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
              bg-contain bg-center bg-no-repeat`}
      style={{
        maskImage: `url(${maskImage})`,
        WebkitMaskImage: `url(${maskImage})`,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="bg-cover bg-center bg-no-repeat min-h-full w-full opacity-50"
        style={{
          backgroundImage: `url(${tex})`,
          mixBlendMode: "multiply",
        }}
      ></div>
    </div>
  );
}

export default Mask;
