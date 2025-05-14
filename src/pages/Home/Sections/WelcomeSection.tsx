import { useEffect, useState, useRef } from "react"

type WelcomeSectionProps = {
  title: string
  subtitle?: string
  images?: string[]
}

// Custom hook to replace react-intersection-observer
const useCustomInView = (options = {}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        console.log(inView);
      },
      {
        threshold: 0.90,
        ...options,
      },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return { ref, inView }
}

const WelcomeSection = ({
  title,
  subtitle,
  images = [
    "/placeholder.svg?height=120&width=120",
    "/placeholder.svg?height=150&width=150",
    "/placeholder.svg?height=130&width=130",
    "/placeholder.svg?height=140&width=140",
    "/placeholder.svg?height=110&width=110",
  ],
}: WelcomeSectionProps) => {
  const [imagesVisible, setImagesVisible] = useState(false)
  const { ref, inView } = useCustomInView()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
  
    if (inView) {
      setImagesVisible(true)
    } else {
      timeoutId = setTimeout(() => {
        setImagesVisible(false)
      }, 2000)
    }
  
    return () => {
      clearTimeout(timeoutId)
    }
  }, [inView])

  return (
    <section ref={ref} className="h-[90vh] flex flex-col items-center justify-center text-center px-6 relative">
      <div className="relative">
        {/* Top left image */}
        <div
          className={`absolute -top-32 -left-40 transition-all duration-700 ${
            imagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <img
            src={images[0] || "/placeholder.svg"}
            alt="Decorative image"
            width={120}
            height={120}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Top right image */}
        <div
          className={`absolute -top-28 -right-44 transition-all duration-700 ${
            imagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <img
            src={images[1] || "/placeholder.svg"}
            alt="Decorative image"
            width={150}
            height={150}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Bottom left image */}
        <div
          className={`absolute -bottom-28 -left-36 transition-all duration-700 ${
            imagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <img
            src={images[2] || "/placeholder.svg"}
            alt="Decorative image"
            width={130}
            height={130}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Bottom right image */}
        <div
          className={`absolute -bottom-32 -right-40 transition-all duration-700 ${
            imagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <img
            src={images[3] || "/placeholder.svg"}
            alt="Decorative image"
            width={140}
            height={140}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Center bottom image */}
        <div
          className={`absolute -bottom-24 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            imagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <img
            src={images[4] || "/placeholder.svg"}
            alt="Decorative image"
            width={110}
            height={110}
            className="rounded-md shadow-md"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}

export default WelcomeSection