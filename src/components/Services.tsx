import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "🎤",
      title: "Звукозапись",
      description:
        "Профессиональная студия звукозаписи с современным оборудованием для создания качественного звука",
    },
    {
      icon: "🎛️",
      title: "Продюсирование",
      description:
        "Полный цикл музыкального продюсирования от идеи до готового трека",
    },
    {
      icon: "📀",
      title: "Дистрибуция",
      description:
        "Размещение музыки на всех популярных стриминговых платформах и цифровых магазинах",
    },
    {
      icon: "🎯",
      title: "Промоушн",
      description:
        "Продвижение артистов в социальных сетях и музыкальных медиа",
    },
    {
      icon: "🎨",
      title: "Брендинг",
      description:
        "Создание уникального имиджа артиста и визуального оформления релизов",
    },
    {
      icon: "🤝",
      title: "Менеджмент",
      description:
        "Полное сопровождение карьеры артиста и организация концертной деятельности",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Наши услуги
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Полный спектр услуг для музыкантов — от записи трека до построения
            успешной карьеры
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-white text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
