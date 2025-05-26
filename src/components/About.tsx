import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            О лейбле
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Марк Левски — основатель
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Музыкальный продюсер и визионер, который верит в силу музыки
              изменять мир. Основал лейбл "Левски" с целью поддержки начинающих
              артистов и создания уникального звучания.
            </p>
            <p className="text-gray-400 leading-relaxed">
              За плечами — опыт работы с ведущими студиями и артистами, глубокое
              понимание музыкальной индустрии и страсть к открытию новых
              талантов.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    5+
                  </div>
                  <div className="text-gray-300">Лет опыта</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    20+
                  </div>
                  <div className="text-gray-300">Проектов</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <div className="text-6xl">🎵</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
