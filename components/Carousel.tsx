import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CarouselProps = {
  data: { image: string }[];
};

const Carousel = ({ data }: CarouselProps) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-full max-w-2xl aspect-square rounded-lg overflow-hidden shadow-lg">
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="w-full h-full absolute flex transition-all duration-500 ease-in-out"
        >
          {data.map((v, i) => (
            <div key={i} className="relative shrink-0 w-full h-full">
              <Image
                className="object-cover"
                alt={`Imagem ${i + 1} do carrossel`}
                fill
                src={v.image || "https://random.imagecdn.app/500/500"}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-blue-900 shadow-md transition-all duration-200 ${
            currentImg === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-110"
          }`}
          aria-label="Imagem anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-blue-900 shadow-md transition-all duration-200 ${
            currentImg === data.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-110"
          }`}
          aria-label="Próxima imagem"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Indicadores de slide */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImg(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentImg === index
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Contador de slides */}
      <div className="text-sm text-gray-600">
        {currentImg + 1} / {data.length}
      </div>
    </div>
  );
};

export default Carousel;
