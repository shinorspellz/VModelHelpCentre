"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const pathname = usePathname();

  const DURATION = 7000;
  const [slideIndex, setSlideIndex] = useState(0);

  const slideShowImages = [
    "https://images.unsplash.com/photo-1634826260499-7d97a6049913",
    "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
    "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
  ];
  useEffect(() => {
    const myInterval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length);
    }, DURATION);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  if (!!pathname.split("/")[0] || !!pathname.split("/")[1]) {
    return null;
  }
  return (
    <div className="w-auto mb-12 mx-4">
      <h1 className="text-3xl my-3 text-[# EDCEAB] font-semibold text-center  ">
        Welcome to VModel&apos;s Help Center
      </h1>
      {slideShowImages.map((item) => {
        if (item === slideShowImages[slideIndex]) {
          return (
            <Image
              key={slideShowImages[slideIndex]}
              height={500}
              width={500}
              src={slideShowImages[slideIndex]}
              className="rounded-[21px] w-full h-full aspect-video  object-cover animate-fade fade bg-[#68555481]"
              alt={`slide num ${slideIndex + 1}`}
            />
          );
        }
        return null;
      })}

      <div className="flex w-fit mx-auto mt-3 gap-2">
        {slideShowImages.map((item, index) => {
          return (
            <div
              onClick={() => {
                setSlideIndex(index);
              }}
              key={item}
              className={`h-4 w-4 rounded-full bg-gray-300  ${
                index === slideIndex ? "opacity-70" : " opacity-30 "
              } hover:bg-gray-200 cursor-pointer`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

/* <Image
        height={500}
        width={500}
        src={slideShowImages[slideIndex]}
        className="w-full h-full aspect-video  object-cover fade"
        alt={`Slide ${slideIndex + 1}`}
      /> */
