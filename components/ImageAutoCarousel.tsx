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
    <div className="relative h-[2.5rem] w-full overflow-hidden md:h-[4rem]">
      <div className="absolute flex">
        {[...Array(3)].map((_, index) => (
          <section
            key={index}
            className={`flex ${reverse ? "animate-swipe-reverse" : "animate-swipe"}`}
          >
            {text.map((txt, id) => (
              <div key={id}>
                <div className="mr-3 flex h-[2.5rem] max-w-[150px] items-center rounded-full bg-white/5 object-contain px-6 sm:max-w-[200px] sm:px-8 md:mr-5 md:h-[4rem] md:max-w-[250px] md:px-10 md:text-xl">
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
