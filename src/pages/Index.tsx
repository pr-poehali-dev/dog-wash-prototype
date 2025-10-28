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
      url: "https://cdn.poehali.dev/projects/445ec4c5-6c91-40e8-adf1-9aca81c4dbe9/files/b5100cb1-b5da-4c17-9bb9-4b1a90287245.jpg",
      title: "МОЙПЕС — финальный прототип",
      description: "Герметичный непрозрачный корпус, голова снаружи"
    },
    {
      url: "https://cdn.poehali.dev/files/fe208b4b-5032-4f16-a749-7d8fb5a999f6.png",
      title: "Технический чертеж с аннотациями",
      description: "Подробная схема с техническими пояснениями"
    },
    {
      url: "https://cdn.poehali.dev/files/ac09ee89-ea29-429c-9ea4-841610dabb8a.jpg",
      title: "Детальный эскиз с собакой",
      description: "Проработка конструкции и компоновки"
    },
    {
      url: "https://cdn.poehali.dev/files/aab03ed0-0b08-4c36-acdd-33a419d84ad4.jpg",
      title: "Эскиз открытой конструкции",
      description: "Вид с откинутой крышкой"
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
          <Icon name="Droplet" className="text-teal-500" size={32} />
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-montserrat">
            МОЙПЕС
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
              Прототип МОЙПЕС v1.0
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat leading-tight">
              Инновационное решение для ухода за питомцами
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Устройство цилиндрической формы с откидной верхней частью для удобного помещения собаки. 
              Голова питомца остается снаружи через специальное отверстие, что обеспечивает комфорт и безопасность.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-teal-500 hover:bg-teal-600">Безопасно</Badge>
              <Badge className="bg-teal-500 hover:bg-teal-600">Эффективно</Badge>
              <Badge className="bg-teal-500 hover:bg-teal-600">Комфортно</Badge>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <img 
              src={galleryImages[0].url}
              alt={galleryImages[0].title}
              className="relative rounded-2xl shadow-2xl w-full hover-scale"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              3D-обзор прототипа
            </h2>
            <p className="text-gray-600 text-lg">
              Рассмотрите МОЙПЕС со всех сторон
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative group">
                  <img 
                    src="https://cdn.poehali.dev/projects/445ec4c5-6c91-40e8-adf1-9aca81c4dbe9/files/4df5f8a1-d0e1-405f-afa9-08a3e07ea346.jpg"
                    alt="Вид спереди"
                    className="w-full h-80 object-cover hover-scale"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold">Вид спереди</p>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src="https://cdn.poehali.dev/projects/445ec4c5-6c91-40e8-adf1-9aca81c4dbe9/files/f801aa61-aaa0-4fb9-a371-5bfca0ad7124.jpg"
                    alt="Вид сбоку"
                    className="w-full h-80 object-cover hover-scale"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold">Вид сбоку</p>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src="https://cdn.poehali.dev/projects/445ec4c5-6c91-40e8-adf1-9aca81c4dbe9/files/f7ba80b6-659b-4530-8882-b70d46e9097f.jpg"
                    alt="Вид сзади"
                    className="w-full h-80 object-cover hover-scale"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold">Вид сзади</p>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src="https://cdn.poehali.dev/projects/445ec4c5-6c91-40e8-adf1-9aca81c4dbe9/files/5d76f032-7b3a-4f20-9d6c-961f04287e38.jpg"
                    alt="Вид сверху"
                    className="w-full h-80 object-cover hover-scale"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold">Вид сверху</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Галерея эскизов
            </h2>
            <p className="text-gray-600 text-lg">
              От концепции до реализации
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <Icon name={feature.icon} className="text-teal-500" size={24} />
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
                      <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
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
            © 2025 МОЙПЕС. Прототип автоматической мойки для собак.
          </p>
        </div>
      </footer>
    </div>
  );
}