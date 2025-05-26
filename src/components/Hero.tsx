import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-playfair italic tracking-wider">
            ЛЕВСКИ
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Музыкальный лейбл нового поколения
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Мы помогаем талантливым артистам воплощать музыкальные идеи в жизнь
            и находить свою аудиторию в современном мире
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Стать артистом
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              Узнать больше
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Music wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
