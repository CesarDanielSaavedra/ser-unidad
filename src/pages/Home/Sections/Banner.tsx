type BannerProps = {
    title?: string
    subtitle?: string
    height?: string
  }
  
  const Banner = ({
    title = "Bienvenidos",
    subtitle = "Descubre nuestra experiencia única",
    height = "h-screen",
  }: BannerProps) => {
    const handleScrollDown = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    }
  
    return (
      <section
        className={`${height} flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 relative`}
      >
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-slate-600">{subtitle}</p>
        </div>
  
        <button
          onClick={handleScrollDown}
          className="absolute bottom-10 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l4 4 4-4" />
            <path d="M12 8v8" />
          </svg>
        </button>
      </section>
    )
  }
  
  export default Banner