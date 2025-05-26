import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            Контакты
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">
            Готовы начать сотрудничество? Свяжитесь с нами!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800 border-slate-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Связаться с нами
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400">info@levski.music</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Телефон</div>
                    <div className="text-gray-400">+7 (XXX) XXX-XX-XX</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Адрес</div>
                    <div className="text-gray-400">Москва, Россия</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Социальные сети
              </h3>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                >
                  <span className="mr-3">🎵</span>
                  SoundCloud
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                >
                  <span className="mr-3">📷</span>
                  Instagram
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                >
                  <span className="mr-3">💬</span>
                  Telegram
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                >
                  <span className="mr-3">🎬</span>
                  YouTube
                </Button>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg text-center">
                <p className="text-white font-medium mb-4">
                  Готовы стать частью лейбла?
                </p>
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-100 font-bold"
                >
                  Отправить демо
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
