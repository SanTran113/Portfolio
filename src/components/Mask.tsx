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
      className={`${className} size-image
                [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] 
                bg-cover bg-center bg-no-repeat`}
      style={{
        maskImage: `url(${maskImage})`,
        backgroundImage: `url(${backgroundImage})`,
      }}
    ></div>
  );
}

export default Mask;
