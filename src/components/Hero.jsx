import React from "react";

const Hero = ({
  title,
  subTitle,
  description,
  btnText,
  bgSrc,
  overlayOpacity,
}) => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right-bottom md:bg-center"
        style={{ backgroundImage: `url(${bgSrc})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <h2 className="text-2xl md:text-3xl mb-2">{subTitle}</h2>
        <p className="text-lg md:text-xl max-w-2xl mt-5">{description}</p>
        <a
          className="text-center uppercase text-xl font-bold transition-all bg-stone-900 w-60 h-16 flex items-center justify-center mt-4 text-white rounded-md hover:text-yellow-700 hover:bg-white"
          type="button"
          href="process"
        >
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
