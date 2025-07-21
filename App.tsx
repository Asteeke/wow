import { useState, useEffect } from 'react';
import { Slide } from './components/Slide';
import { SlideNavigation } from './components/SlideNavigation';
import { TableComponent } from './components/TableComponent';
import { ProductPillar } from './components/ProductPillar';
import { 
  Target, 
  Users, 
  TrendingUp, 
  Gift,
  Heart,
  Gamepad2,
  Rocket,
  DollarSign,
  Award,
  Zap,
  Star
} from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (event.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Данные для таблицы трендов
  const trendsData = [
    {
      "№": "1",
      "Тренд": "Сдвиг от зависимости к самостоятельности",
      "Описание тренда": "Доля главного источника денег «карманные от родителей» падает: 77% (14–15) → 39% (20–22), при этом подработка/работа растёт 7% → 52%",
      "Эффект на рынок": "Банкам нужно сопровождать жизненный переход: детские продукты перестают работать",
      "Импликации для Alfa-Generation": "Построить путеводитель жизненных этапов: автоапгрейд продуктов по возрасту/доходу"
    },
    {
      "№": "2", 
      "Тренд": "Прогрессирующая финансовая грамотность",
      "Описание тренда": "Низкая вовлечённость в сложные продукты до 17; рост интереса к накоплениям (38%→71%) после 18",
      "Эффект на рынок": "Рынок готов к ступенчатым продуктам: банки, которые «учат + вовлекают»",
      "Импликации для Alfa-Generation": "Запустить лестницу продуктов: кешбэк → копилки → инвестиции"
    },
    {
      "№": "3",
      "Тренд": "Низкий уровень толерантности к комиссиям", 
      "Описание тренда": "Отсутствие комиссий/платы — топ-критерий (88% AVG)",
      "Эффект на рынок": "Базовый тариф с нулевыми комиссиями — рыночный hygiene factor",
      "Импликации для Alfa-Generation": "Гарантированный Zero-Fee пакет. Монетизация — BaaS форматы"
    },
    {
      "№": "4",
      "Тренд": "Кэшбэк-культура",
      "Описание тренда": "Кэшбэк в ТОП-3 критериев выбора банка: 81% AVG",
      "Эффект на рынок": "Прямой кэшбэк вытесняет сложные балльные программы",
      "Импликации для Alfa-Generation": "Развивать динамический кэшбэк + конструктор привилегий"
    },
    {
      "№": "5",
      "Тренд": "UX/UI = базовый минимум",
      "Описание тренда": "Удобный дизайн — 73% AVG; ожидаемый стандарт",
      "Эффект на рынок": "Рынок забирают необанки с простыми интерфейсами",
      "Импликации для Alfa-Generation": "Digital-first и mobile-first стратегии"
    }
  ];

  // Данные для бенчмаркинга
  const benchmarkData = [
    {
      "Критерий / Банк": "Детская карта (6‑14)",
      "Альфа‑Банк": "✅ бесплатная карта 6‑14, суперкэшбэк 100%",
      "Сбербанк": "✅ карта 6‑14, кешбэк до 10%",
      "ВТБ": "✅ карта 6‑17, кешбэк до 15%",
      "Т‑Банк": "✅ Junior до 14, кешбэк до 30%",
      "Газпромбанк": "❌",
      "Совкомбанк": "✅ «Халвёнок» 6‑14",
      "Revolut": "✅ карта &lt; 18, мультивалюта"
    },
    {
      "Критерий / Банк": "Приложение + родконтроль",
      "Альфа‑Банк": "✅ детский режим, лимиты",
      "Сбербанк": "✅ СберKids, интеграция со школой",
      "ВТБ": "❌",
      "Т‑Банк": "✅ Junior‑app, игры",
      "Газпромбанк": "❌",
      "Совкомбанк": "✅ геолокация, задачи‑наградки",
      "Revolut": "✅ задания, аналитика"
    },
    {
      "Критерий / Банк": "Молодёжная карта (14‑22)",
      "Альфа‑Банк": "✅ 0 ₽ обслуживание, кешбэк до 30%",
      "Сбербанк": "✅ 0 ₽ обслуживание",
      "ВТБ": "✅ кешбэк до 15%",
      "Т‑Банк": "✅ Black 14+, мультивалюта",
      "Газпромбанк": "❌",
      "Совкомбанк": "✅ «Халва» 14+",
      "Revolut": "✅ мультивалюта"
    },
    {
      "Критерий / Банк": "Геймификация",
      "Альфа‑Банк": "✅ «барабан» кешбэка, мини‑игры",
      "Сбербанк": "❌",
      "ВТБ": "❌", 
      "Т‑Банк": "✅ квесты в app",
      "Газпромбанк": "❌",
      "Совкомбанк": "❌",
      "Revolut": "❌"
    }
  ];

  // Данные для продуктовых столпов
  const benefitProducts = [
    {
      name: "Alfa Youth Rewards",
      description: "баллы за активность, стаж, волонтёрство; обмен на скидки/понижение ставки", 
      cost: "15",
      effect: "+25% LTV, +18% retention",
      risks: "инфляция баллов",
      synergy: "ипотека (1000 балл = ‑0,5% ставки), Alfa Travel мили"
    },
    {
      name: "Alfa Life Calculator",
      description: "ИИ‑калькулятор выгоды «если останешься до 2030»; подсказки «сделай Х → сэкономишь Y»",
      cost: "14", 
      effect: "+22% retention, +10% X‑Sell CR, +20% MAU",
      risks: "неточность прогноза",
      synergy: "Invest – автоперевод «сэкономленного»"
    },
    {
      name: "Lifestyle Cashback",
      description: "динамичный повыш. кешбэк 5–10% на food, games, subs; активируется челленджем",
      cost: "10",
      effect: "+45% ARPU", 
      risks: "злоупотребления",
      synergy: "Вовлечение в сообщество и продукты экосистемы"
    }
  ];

  const slides = [
    // Slide 1: Title
    <Slide key={0} variant="title">
      <div className="text-center text-white max-w-6xl">
        <div className="mb-8">
          <div className="text-6xl font-bold mb-4">Alfa Generation</div>
          <div className="text-3xl opacity-90 italic">Банк, который растёт вместе с тобой</div>
        </div>
        
        <div className="flex justify-center items-center gap-8 mt-16">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Users className="w-10 h-10 text-white" />
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <div className="text-xl opacity-80 mt-12">
          Инновационная платформа для молодежного сегмента • Альфа-Банк • 2025
        </div>
      </div>
    </Slide>,

    // Slide 2: Project Overview
    <Slide key={1}>
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl text-center text-[color:var(--color-alfa-gray)] mb-12">Проект "Alfa‑Generation"</h1>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl text-[color:var(--color-alfa-red)] mb-4 flex items-center gap-3">
                <Target className="w-6 h-6" />
                Цель
              </h2>
              <ul className="space-y-3 text-[color:var(--color-alfa-gray-medium)]">
                <li>• Снизить Churn rate до 0 за 2 года (сегмент 14-22)</li>
                <li>• Увеличить Share of market с 17% до 34% за 2 года</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl text-[color:var(--color-alfa-red)] mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6" />
                Задачи
              </h2>
              <ul className="space-y-3 text-[color:var(--color-alfa-gray-medium)]">
                <li>• Запуск MVP раздела "Alfa Generation" в мобильном приложении</li>
                <li>• Создать бесшовный механизм перехода между возрастными сегментами (14→18→22+)</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-[color:var(--color-alfa-gray-light)] p-6 rounded-2xl">
              <h2 className="text-2xl text-[color:var(--color-alfa-red)] mb-4 flex items-center gap-3">
                <Star className="w-6 h-6" />
                Долгосрочная стратегия
              </h2>
              <p className="text-[color:var(--color-alfa-gray-medium)] leading-relaxed">
                Выстроить Customer journey для сегмента "молодежь". Сопровождать пользователя с детства через юность к взрослой жизни, предлагая релевантные продукты и формируя лояльность на годы вперед.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[color:var(--color-alfa-red)] to-[color:var(--color-alfa-red-dark)] p-6 rounded-2xl text-white">
              <h2 className="text-2xl mb-4 flex items-center gap-3">
                <Award className="w-6 h-6" />
                Ожидаемый результат
              </h2>
              <p className="leading-relaxed">
                Повышение вовлеченности молодежного сегмента, рост доверия к банку и создание флагманской молодежной платформы с синергетическим эффектом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 3: Strategic Trends Table
    <Slide key={2} variant="section">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl text-center text-[color:var(--color-alfa-gray)] mb-8">Стратегические тренды</h1>
        <TableComponent 
          headers={["№", "Тренд", "Описание тренда", "Эффект на рынок", "Импликации для Alfa-Generation"]}
          rows={trendsData}
          variant="trends"
          className="max-h-[70vh] overflow-y-auto"
        />
      </div>
    </Slide>,

    // Slide 4: Benchmarking
    <Slide key={3}>
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl text-center text-[color:var(--color-alfa-gray)] mb-8">Бенчмаркинг молодёжных предложений</h1>
        <TableComponent 
          headers={["Критерий / Банк", "Альфа‑Банк", "Сбербанк", "ВТБ", "Т‑Банк", "Газпромбанк", "Совкомбанк", "Revolut"]}
          rows={benchmarkData}
          variant="comparison"
          className="text-xs"
        />
        
        <div className="mt-8 bg-[color:var(--color-alfa-red)]/10 p-6 rounded-2xl">
          <h3 className="text-xl text-[color:var(--color-alfa-red)] mb-4">Ключевые выводы</h3>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <strong>Нет сквозной экосистемы</strong> — каждый банк силён лишь на отдельном этапе. Наш шанс — продукт, который взрослеет вместе с клиентом.
            </div>
            <div>
              <strong>Драйверы Gen Z недоиспользованы</strong> — встроенная благотворительность есть лишь у 3 из 7 игроков.
            </div>
            <div>
              <strong>Уникальность в динамике</strong> — конкуренты дают статичный «вау». Мы можем выиграть динамичным конструктором привилегий.
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 5: Flagship Idea
    <Slide key={4} variant="image">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl text-center text-[color:var(--color-alfa-gray)] mb-12">Флагманская идея: платформа "Alfa‑Generation"</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
          <p className="text-xl text-center text-[color:var(--color-alfa-gray)] mb-8 leading-relaxed">
            <strong>"Alfa‑Generation"</strong> – это единая флагманская платформа Альфа-Банка для нового поколения клиентов, 
            интегрированная в мобильное приложение банка.
          </p>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl text-[color:var(--color-alfa-red)] mb-6">Три столпа платформы</h3>
            <div className="flex justify-center gap-8">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <Gift className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="font-bold text-blue-600">ПРИВИЛЕГИИ</div>
                <div className="text-sm text-gray-600">Прозрачность + Выгода</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Heart className="w-8 h-8 mx-auto mb-3 text-green-600" />
                <div className="font-bold text-green-600">ДОБРО</div>
                <div className="text-sm text-gray-600">Благотворительность + Impact</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                <div className="font-bold text-purple-600">СООБЩЕСТВО</div>
                <div className="text-sm text-gray-600">Развитие + Нетворкинг</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[color:var(--color-alfa-red)]/10 p-6 rounded-xl">
            <h4 className="text-lg text-[color:var(--color-alfa-red)] mb-3">Life-long сопровождение</h4>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              Захватываем клиента в молодежном возрасте и ведём до премиальных услуг через поэтапную продуктовую эволюцию.
            </p>
          </div>
          <div className="bg-[color:var(--color-alfa-red)]/10 p-6 rounded-xl">
            <h4 className="text-lg text-[color:var(--color-alfa-red)] mb-3">Персонализация</h4>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              Интерфейс и контент динамически подстраиваются под возраст и увлечения пользователя.
            </p>
          </div>
          <div className="bg-[color:var(--color-alfa-red)]/10 p-6 rounded-xl">
            <h4 className="text-lg text-[color:var(--color-alfa-red)] mb-3">Мотивация через игру</h4>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              Финансовые действия становятся квестами с баллами и командными челленджами.
            </p>
          </div>
          <div className="bg-[color:var(--color-alfa-red)]/10 p-6 rounded-xl">
            <h4 className="text-lg text-[color:var(--color-alfa-red)] mb-3">Автоэволюция продуктов</h4>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              Карта и условия автоматически апгрейдятся в 14/18/22 года без заявок.
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 6: Pillar 1 - Benefits
    <Slide key={5}>
      <div className="max-w-7xl w-full">
        <ProductPillar
          title="Столп 1 · ВЫГОДА"
          subtitle="Прозрачность + Привилегии"
          products={benefitProducts}
          totalCost="73 млн ₽"
          roi="≈ 147%"
          icon={<Gift />}
          variant="benefit"
        />
      </div>
    </Slide>,

    // Slide 7: Pillars 2 & 3
    <Slide key={6} variant="section">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl text-center text-[color:var(--color-alfa-gray)] mb-8">Столпы 2 и 3</h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-white mb-6">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8" />
                <div>
                  <h2 className="text-xl font-bold">Столп 2 · ДОБРО</h2>
                  <p className="text-green-100">Благотворительность + Impact</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-[color:var(--color-alfa-gray)]">Spare Change</h4>
                <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">Округление покупок в пользу фондов</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-[color:var(--color-alfa-gray)]">Alfa Добро‑Маркетплейс</h4>
                <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">Витрина фондов + прозрачные отчёты</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-[color:var(--color-alfa-gray)]">Волонтёр‑трекер</h4>
                <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">Интеграция Добро.ру, баллы за помощь</p>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-xl">
              <div className="text-sm text-gray-600">ИТОГО: <strong className="text-green-600">39 млн ₽</strong></div>
              <div className="text-sm text-gray-600">ROI: <strong className="text-green-600">≈ 89%</strong></div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl text-white mb-6">
              <div className="flex items-center gap-3">
                <Gamepad2 className="w-8 h-8" />
                <div>
                  <h2 className="text-xl font-bold">Столп 3 · СООБЩЕСТВО</h2>
                  <p className="text-purple-100">Развитие + Нетворкинг</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-[color:var(--color-alfa-gray)]">Alfa Квесты</h4>
                <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">Сюжетные игры "Накопи на PS5"</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-[color:var(--color-alfa-gray)]">Random Coffee 2.0</h4>
                <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">ИИ‑матчинг по интересам</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-[color:var(--color-alfa-gray)]">Alfa Wave</h4>
                <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">TikTok‑лента про участников</p>
              </div>
            </div>
            
            <div className="mt-6 bg-purple-50 p-4 rounded-xl">
              <div className="text-sm text-gray-600">ИТОГО: <strong className="text-purple-600">114 млн ₽</strong></div>
              <div className="text-sm text-gray-600">ROI: <strong className="text-purple-600">≈ 132%</strong></div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-[color:var(--color-alfa-red)] text-white p-6 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-2">Общий портфель Alfa‑Generation 2025‑2026</h3>
            <div className="text-xl">CAPEX = <strong>226 млн ₽</strong> • средневзвешенный ROI ≈ <strong>125%</strong> за 3 года</div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 8: Business Model
    <Slide key={7}>
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl text-center text-[color:var(--color-alfa-gray)] mb-8">Бизнес‑модель Alfa‑Generation</h1>
        <div className="text-center text-sm text-[color:var(--color-alfa-gray-medium)] mb-8">MECE‑структура</div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-lg text-[color:var(--color-alfa-gray)]">Ценностное предложение (WHAT)</h3>
            </div>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              «Единый финансовый спутник 6‑22»: удобство + выгода + социальная польза. 
              Родителям — контроль, молодёжи — игры и карьерный трек.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-lg text-[color:var(--color-alfa-gray)]">Клиентские сегменты (WHO)</h3>
            </div>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              Дети 6‑13 │ Подростки 14‑17 │ Молодёжь 18‑22 │ Косвенные: родители/опекуны, партнёр‑бренды
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-lg text-[color:var(--color-alfa-gray)]">Каналы и отношения (HOW)</h3>
            </div>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              Mobile‑first супер‑апп • Сообщество: квесты, Random Coffee • 
              Офлайн phygital: pop‑up кампус‑стоики, фестивали
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-lg text-[color:var(--color-alfa-gray)]">Ключевые ресурсы (WITH WHAT)</h3>
            </div>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              Digital‑платформа (Alfa App + API) • Экосистема Альфы • 
              Партнёр‑сет‑360° • Команда Gen Z product + Data/AI lab
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[color:var(--color-alfa-red)] rounded-lg flex items-center justify-center text-white font-bold">5</div>
              <h3 className="text-lg text-[color:var(--color-alfa-gray)]">Доходная формула (REVENUE)</h3>
            </div>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              Freemium Zero‑fee → подписка 99-899 ₽ • Комиссия партнёров (1‑2% GMV) • 
              Cross‑sell • Долгосрочный LTV
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">6</div>
              <h3 className="text-lg text-[color:var(--color-alfa-gray)]">Структура затрат (COST)</h3>
            </div>
            <p className="text-sm text-[color:var(--color-alfa-gray-medium)]">
              CAPEX 226 млн ₽ на 2024‑26 (IT 32%, маркет 25%) • 
              OPEX ≈ 70 млн ₽/год (команды, облако, поддержка)
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-[color:var(--color-alfa-red)] to-[color:var(--color-alfa-red-dark)] p-6 rounded-2xl text-white">
          <h3 className="text-xl mb-4 flex items-center gap-3">
            <TrendingUp className="w-6 h-6" />
            Драйверы окупаемости (WHY IT PAYS)
          </h3>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>• Retention ↓ отток 8% → ≤ 4% = ⚡ 60 млн ₽ экономии CAC/год</div>
            <div>• +1 млн активных молодёжи ⇒ транзакционный доход 120 млн ₽/год</div>
            <div>• 15% youth‑to‑invest конверсия ⇒ комиссии ≥ 80 млн ₽/год</div>
            <div>• LTV × 2 при first‑mortgage / auto‑loan в 5‑10 лет</div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 9: Marketing Strategy
    <Slide key={8} variant="title">
      <div className="text-center text-white max-w-6xl">
        <h1 className="text-4xl font-bold mb-12">Маркетинговая стратегия</h1>
        <div className="text-lg mb-8 opacity-90">Этапы + каналы — MECE</div>
        
        <div className="grid grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg">Awareness</h3>
            </div>
            <div className="text-sm opacity-90 mb-3">TikTok, VK, MAX, Telegram</div>
            <div className="text-xs opacity-80">KPI: 50 млн показов, SOV ≥ 25%</div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg">Acquisition</h3>
            </div>
            <div className="text-sm opacity-90 mb-3">Инфлюенс-маркетинг, рефералы</div>
            <div className="text-xs opacity-80">KPI: 2,5 млн новых аккаунтов</div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg">Engagement</h3>
            </div>
            <div className="text-sm opacity-90 mb-3">Lifestyle Cashback, квесты</div>
            <div className="text-xs opacity-80">KPI: MAU/DAU ≥ 35%</div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg">Activation</h3>
            </div>
            <div className="text-sm opacity-90 mb-3">Welcome-квест, кэшбэк-рулетка</div>
            <div className="text-xs opacity-80">KPI: D1 activation ≥ 65%</div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg">Monetisation</h3>
            </div>
            <div className="text-sm opacity-90 mb-3">Cross-sell, подписки</div>
            <div className="text-xs opacity-80">KPI: ARPU +40%, 200k подписок</div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-lg">Advocacy</h3>
            </div>
            <div className="text-sm opacity-90 mb-3">UGC-челленджи, волонтёр-треки</div>
            <div className="text-xs opacity-80">KPI: NPS &gt; 60</div>
          </div>
        </div>
        
        <div className="mt-12 bg-white/20 p-6 rounded-xl backdrop-blur-sm">
          <div className="text-xl font-bold mb-2">North‑Star KPI</div>
          <div className="text-lg opacity-90">
            Охват молодёжи <strong>34% рынка</strong> и churn rate <strong>≤ 4%</strong> к Q4 2026
          </div>
        </div>
      </div>
    </Slide>
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
      {slides[currentSlide]}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onSlideSelect={goToSlide}
      />
    </div>
  );
}