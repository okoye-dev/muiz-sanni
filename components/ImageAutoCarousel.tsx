import React from "react";

interface ImageAutoCarouselProps {
  text: string[];
  reverse?: boolean;
}

const ImageAutoCarousel: React.FC<ImageAutoCarouselProps> = ({
  text,
  reverse,
}) => {
  return (
    <div className="relative h-[2.5rem] w-full overflow-hidden md:h-[4rem] lg:h-[5rem] xl:h-[6rem]">
      <div className="absolute flex">
        {[...Array(3)].map((_, index) => (
          <section
            key={index}
            className={`flex ${reverse ? "animate-swipe-reverse" : "animate-swipe"}`}
          >
            {text.map((txt, id) => (
              <div key={id}>
                <div className="mr-3 flex h-[2.5rem] items-center rounded-full bg-white/5 object-contain px-6 font-light sm:px-6 md:mr-5 md:h-[3.5rem] md:px-8 md:text-2xl lg:mr-8 lg:h-[4.5rem] lg:px-9 lg:text-3xl xl:h-[5rem] xl:px-10 xl:text-4xl">
                  {txt}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ImageAutoCarousel;
