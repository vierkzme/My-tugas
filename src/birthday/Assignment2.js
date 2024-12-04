import { Heart } from "lucide-react";

export default function Assignment2() {
  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center relative overflow-hidden">
      {/* Love background */}
      {[...Array(20)].map((_, i) => (
        <Heart
          key={i}
          className={`absolute text-pink-400 animate-icon-move`}
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

      <div className="max-w-2xl w-full relative">
        {/* Happy Birthday Text */}
        <h1
          className="text-6xl md:text-7xl font-bold text-center mb-8 tracking-wide"
          style={{
            background: "linear-gradient(45deg, #FFD700, #FFA500)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Happy Birthday!
        </h1>

        {/* Polaroid Frame */}
        <div className="bg-white p-4 shadow-xl max-w-md mx-auto rotate-[-2deg] transition-transform hover:rotate-0 duration-300">
          <div className="aspect-square relative overflow-hidden mb-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
              alt="Birthday celebration"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-gray-800 text-center font-handwriting text-lg">
            Wish you all the best! &quot;Claudia victors&quot;
          </p>
        </div>

        {/* Decorative gold brush strokes */}
        <div className="absolute -z-10 w-full h-full top-0 left-0 opacity-20">
          <div className="absolute top-1/4 -left-10 w-40 h-8 bg-amber-200 rotate-45 blur-sm" />
          <div className="absolute bottom-1/4 -right-10 w-40 h-8 bg-amber-200 -rotate-45 blur-sm" />
        </div>
      </div>
    </div>
  );
}
