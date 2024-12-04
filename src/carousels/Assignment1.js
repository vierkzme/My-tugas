import { useState } from "react";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";

const specialCarouselData = [
  {
    id: 1,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313161990604324994/flex_ardy_nugroho.jpg?ex=6751c3e7&is=67507267&hm=2966ce82a84368414d46da90abb27df5e85243a3d1b953259463284825b0b1f3&",
    date: "Sep 12, 2024",
    author: "vierkzme",
    title: "Flexbox Froggy",
    link: "https://flexboxfroggy.com",
  },
  {
    id: 2,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313161990981816360/grid_ardy_nugroho.jpg?ex=6751c3e8&is=67507268&hm=9e39e1b1a1549d4cbba300f353c824831a85cec2d87ff98e0f438f9c1ca8947d&",
    date: "Sep 12, 2024",
    author: "vierkzme",
    title: "Grid Garden",
    link: "https://cssgridgarden.com",
  },
];

const Assignment1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === specialCarouselData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? specialCarouselData.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      {[...Array(20)].map((_, i) => (
        <Github
          key={i}
          className="absolute text-amber-300 animate-icon-move"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
          size={20}
        />
      ))}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Assignment 1 : Understand Flexbox & Grid
        </h1>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {specialCarouselData.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                      <p className="text-sm mb-2">
                        {item.date} by {item.author}
                      </p>
                      <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                      <a
                        href={item.link}
                        className="text-xs bg-blue-700 bg-opacity-50 px-2 py-1 rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute !mb-10 top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {specialCarouselData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-yellow-400" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment1;
