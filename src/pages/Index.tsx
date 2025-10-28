import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const features = [
    { icon: "Droplets", title: "Автоматическая мойка", description: "Система распыления с регулировкой давления" },
    { icon: "Wind", title: "Сушка", description: "Встроенная система теплой сушки" },
    { icon: "Shield", title: "Безопасность", description: "Мягкая фиксация без стресса для питомца" },
    { icon: "Gauge", title: "Регулировка", description: "Подходит для средних и крупных пород" }
  ];

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/files/882c4aaf-32ff-4d89-8136-b75c0d81a3e6.jpg",
      title: "Прототип устройства",
      description: "Цилиндрическая форма с откидной крышкой"
    }
  ];

  const specs = [
    { label: "Размеры", value: "120 × 80 × 90 см" },
    { label: "Вес питомца", value: "15-50 кг" },
    { label: "Время мойки", value: "8-12 минут" },
    { label: "Температура воды", value: "35-38°C" },
    { label: "Потребление воды", value: "25-30 литров" },
    { label: "Материал", value: "Медицинский пластик" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Icon name="Sparkles" className="text-sky-500" size={32} />
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-montserrat">
            DogWash Pro
          </h1>
        </div>
        <p className="text-center text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Автоматическая мойка для собак средних и крупных пород
        </p>
      </header>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <Badge variant="outline" className="text-sm">
              <Icon name="Zap" size={14} className="mr-1" />
              Прототип v1.0
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat leading-tight">
              Инновационное решение для ухода за питомцами
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Устройство цилиндрической формы с откидной верхней частью для удобного помещения собаки. 
              Голова питомца остается снаружи через специальное отверстие, что обеспечивает комфорт и безопасность.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-sky-500 hover:bg-sky-600">Безопасно</Badge>
              <Badge className="bg-sky-500 hover:bg-sky-600">Эффективно</Badge>
              <Badge className="bg-sky-500 hover:bg-sky-600">Комфортно</Badge>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <img 
              src={galleryImages[0].url}
              alt={galleryImages[0].title}
              className="relative rounded-2xl shadow-2xl w-full hover-scale"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <Icon name={feature.icon} className="text-sky-500" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Технические характеристики
            </h2>
            <p className="text-gray-600 text-lg">
              Параметры прототипа разработаны с учетом потребностей питомцев
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {specs.map((spec, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-sky-500 mt-2"></div>
                      <div className="flex-1">
                        <dt className="text-sm text-gray-500 mb-1">{spec.label}</dt>
                        <dd className="text-lg font-semibold text-gray-900">{spec.value}</dd>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Принцип работы
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Размещение", description: "Откройте верхнюю крышку и поместите собаку внутрь. Голова выводится наружу через мягкое отверстие." },
            { step: "02", title: "Мойка", description: "Автоматическая система распыляет воду с шампунем, равномерно очищая шерсть питомца." },
            { step: "03", title: "Сушка", description: "Встроенная система теплого воздуха бережно высушивает шерсть за несколько минут." }
          ].map((item, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 DogWash Pro. Прототип автоматической мойки для собак.
          </p>
        </div>
      </footer>
    </div>
  );
}
