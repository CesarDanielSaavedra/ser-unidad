import type React from "react"

interface CardProps {
  title: string
  description: string
  imageUrl: string
  link: string
  isLarge: boolean
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link, isLarge }) => {
  return (
    <a
      href={link}
      className={`
        block rounded-lg overflow-hidden shadow-md
        transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
        relative
      `}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Contenido de texto */}
      <div className="absolute bottom-0 left-0 p-4 text-white z-10">
        <h2 className={`font-bold mb-2 ${isLarge ? "text-2xl" : "text-lg"}`}>{title}</h2>
        <p className="text-sm opacity-90">{description}</p>
      </div>
    </a>
  )
}

const CardLayout: React.FC = () => {
  // Datos de ejemplo para las 4 cards
  const cards: CardProps[] = [
    {
      title: "Moveklub Experience",
      description: "Descubre nuestra experiencia de marca única",
      imageUrl: "https://picsum.photos/800/600",
      link: "https://example.com/experience",
      isLarge: true,
    },
    {
      title: "Fitness",
      description: "Programas de entrenamiento personalizados",
      imageUrl: "https://picsum.photos/600/600",
      link: "https://example.com/fitness",
      isLarge: false,
    },
    {
      title: "Comunidad",
      description: "Únete a nuestra comunidad global",
      imageUrl: "https://picsum.photos/800/600?random=1",
      link: "https://example.com/community",
      isLarge: true,
    },
    {
      title: "Nutrición",
      description: "Consejos y planes nutricionales",
      imageUrl: "https://picsum.photos/600/600?random=2",
      link: "https://example.com/nutrition",
      isLarge: false,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Primera fila: grande a la izquierda, pequeña a la derecha */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="md:w-2/3 w-full h-64 md:h-80">
          <Card {...cards[0]} />
        </div>
        <div className="md:w-1/3 w-full h-64">
          <Card {...cards[1]} />
        </div>
      </div>

      {/* Segunda fila: pequeña a la izquierda, grande a la derecha */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3 w-full h-64 order-2 md:order-1">
          <Card {...cards[3]} />
        </div>
        <div className="md:w-2/3 w-full h-64 md:h-80 order-1 md:order-2">
          <Card {...cards[2]} />
        </div>
      </div>
    </div>
  )
}

export default CardLayout