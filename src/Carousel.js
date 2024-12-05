import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";

/* /placeholder.svg?height=400&width=600 */
const carouselData = [
  {
    id: 1,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1314302449766498455/5234330.jpg?ex=6753470a&is=6751f58a&hm=2009dcb3013a20c4326c11cbb98d51661facbddca3835cd2e5749edf1c5804c0&",
    date: "Sep 12, 2024",
    author: "vierkzme",
    title: "Assignment 1",
    link: "",
  },
  {
    id: 2,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1314307197941055488/image.png?ex=67534b76&is=6751f9f6&hm=34f55b6e79586faff3b6092863b7b1e934926cf36e56a0214de0d58d8c07eaee&",
    date: "Sep 23, 2024",
    author: "vierkzme",
    title: "Assignment 2",
    link: "",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    date: "Nov 2, 2024",
    author: "vierkzme",
    title: "Assignment 3",
    link: "",
  },
  {
    id: 4,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1314314691618799737/image.png?ex=67535271&is=675200f1&hm=f7973a7ffc3267594bf8fed205333dbd3ce53f07e746b83d54d0ce609a1f1417&",
    date: "Nov 21, 2024",
    author: "vierkzme",
    title: "Assignment 4",
    link: "",
  },
  {
    id: 5,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313943605533999284/image.png?ex=6751f8d7&is=6750a757&hm=c61fa382fae49c344a0ae63af090a707c5377d83be04605b9cb5e78d1e2addad&",
    date: "Nov 25, 2024",
    author: "vierkzme",
    title: "Assignment 5",
    link: "",
  },
  {
    id: 6,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313969708982075544/image.png?ex=67521126&is=6750bfa6&hm=fca80b3d8639e81d4800456f0ce470916340e2356579a67da1aea29f8bde8b2b&",
    date: "Nov 28, 2024",
    author: "vierkzme",
    title: "Assignment 6",
    link: "https://movies-app-seven-mauve.vercel.app/",
  },
  {
    id: 7,
    image:
      "https://cdn.discordapp.com/attachments/1104733859360297091/1313966490705203290/image.png?ex=67520e27&is=6750bca7&hm=f22c72d2c127eed443a6c4b9e84ccc90e83144a31940619cff1bff6822f87a6f&",
    date: "Des 1, 2024",
    author: "vierkzme",
    title: "Capstone",
    link: "https://news-app-beta-peach.vercel.app/",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
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
            animationDelay: `${Math.random() * 3}s`, // Variasi delay
            opacity: Math.random() * 0.7 + 0.3,
          }}
          size={20}
        />
      ))}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Assignments
        </h1>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselData.map((item) => (
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
                      <div className="flex space-x-2">
                        {item.id === 1 ||
                        item.id === 2 ||
                        item.id === 3 ||
                        item.id === 4 ||
                        item.id === 5 ? (
                          <Link
                            to={`/assignment/${item.id}`}
                            className="text-xs bg-black border-dotted border-2 border-white bg-opacity-50 px-2 py-1 rounded"
                          >
                            Go
                          </Link>
                        ) : (
                          <a
                            href={item.link}
                            className="text-xs bg-black border-dotted border-2 border-white bg-opacity-50 px-2 py-1 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black p-2 rounded-full"
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
            {carouselData.map((_, index) => (
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

export default Carousel;
