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
                mask-[url(${maskImage})] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] 
                bg-[url(${backgroundImage})] bg-cover bg-center bg-no-repeat`}
    ></div>
  );
}

export default Mask;
