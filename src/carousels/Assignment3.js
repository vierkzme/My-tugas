import { useState } from "react";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";

const specialCarouselData = [
  {
    id: 1,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313410884978212884/image.png?ex=67515a34&is=675008b4&hm=48036b4a0224726ebe58b31bbf3a2a08a3a133edbdf21c5075de81f5ba21edcf&",
    date: "Okt 3, 2024",
    author: "vierkzme",
    title: "Exercise 1",
    answer:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313408000618135573/exercise1.png?ex=67500605&is=674eb485&hm=9f9f2bc3bca4663c39154e101bd57fac353166b7cc2f7d551705cd8e79483754&",
  },
  {
    id: 2,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313411064498491402/image.png?ex=67515a5f&is=675008df&hm=d508a03da57492aa8bd5a2c2e825427208a6d378f184b02406418e4c73657560&",
    date: "Okt 3, 2024",
    author: "vierkzme",
    title: "Exercise 2",
    answer:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313409258292772904/exercise2.png?ex=67500731&is=674eb5b1&hm=0ac5f594a06484e55c9599729b975b335bc72f7f8bd8fc06b3f570a886df09e9&",
  },
  {
    id: 3,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313411139689910363/image.png?ex=67515a71&is=675008f1&hm=f59cd101f5036cc4de7ba4fe92c0c26cc49fce3486863a46548b962038c39683&",
    date: "Okt 3, 2024",
    author: "vierkzme",
    title: "Exercise 3",
    answer:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313409274986233867/exercise3.png?ex=67500735&is=674eb5b5&hm=6586e7ca1359c510992a2c28322a13b9ec2540f8430d7213b0f797354deb5835&",
  },
  {
    id: 4,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313411231234916383/image.png?ex=67515a87&is=67500907&hm=f77e78065d17ce411a8d96d6933b0b6e1559634406716df9926fe5784587ec60&",
    date: "Okt 3, 2024",
    author: "vierkzme",
    title: "Exercise 4",
    answer:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313409299019464734/exercise4.png?ex=6750073a&is=674eb5ba&hm=1edd27c015d1fb1ab265e1b2ea0b38d4d862ecde14b7f9391b040e35b51cc9ba&",
  },
  {
    id: 5,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313411297693401088/image.png?ex=67515a97&is=67500917&hm=4b4c7d8e242213c219171bd27a219af66c1354503c33296bde8fa6280d8a32a5&",
    date: "Okt 3, 2024",
    author: "vierkzme",
    title: "Exercise 4",
    answer:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313409299019464734/exercise4.png?ex=6750073a&is=674eb5ba&hm=1edd27c015d1fb1ab265e1b2ea0b38d4d862ecde14b7f9391b040e35b51cc9ba&",
  },
];

const Assignment3 = () => {
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
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
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
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Assignment 3 : JavaScript
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
                      className="w-full h-[400px] object-cover rounded-lg border-double border-2 border-amber-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                      <p className="text-sm mb-2">
                        {item.date} by {item.author}
                      </p>
                      <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                      <a
                        href={item.answer}
                        className="text-xs bg-black border-dotted border-2 border-white bg-opacity-50 px-2 py-1 rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Answer
                      </a>
                      <a
                        href={item.image}
                        className="text-xs bg-black border-dotted border-2 border-white bg-opacity-50 ms-2 px-2 py-1 rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Look
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute !mb-10 top-1/2 left-4 transform -translate-y-1/2 bg-black p-2 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black p-2 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {specialCarouselData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-gray-500"
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

export default Assignment3;
