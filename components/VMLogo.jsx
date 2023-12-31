import Image from "next/image";

export const VMLogo = ({ isDark, isFull, width, height }) => {
  return (
    <>
      {isFull ? (
        <Image
          alt="VModel Logo"
          priority
          src={`/assets/images/logo/${
            isDark ? "loo-white.png" : "vmodel-logo.png"
          }`}
          width={width}
          height={height}
          className="rounded-[999px] object-contain max-w-full inline-block align-middle"
        />
      ) : (
        <Image
          alt="VModel Logo"
          priority
          src={`/assets/images/logo/${
            isDark ? "vmodel-logo-light.svg" : "vmodel-logo.svg"
          }`}
          width={width}
          height={height}
          className="rounded-[999px] object-contain max-w-full inline-block align-middle"
        />
      )}
    </>
  );
};
