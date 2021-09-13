import Image from "next/image"
import { useRouter } from "next/dist/client/router"

const Footer = () => {
  const router = useRouter()

  return (
    router.pathname === "/" && (
      <div className="relative z-10 flex justify-center">
        <div className="fixed bottom-0 w-screen max-w-screen-xl">
          <div className=" absolute bottom-[20px] right-[20px] sm:bottom-[40px] sm:right-[50px] z-20">
            <a
              href="https://www.producthunt.com/posts/slice-beta?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-slice-beta"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=307313&amp;theme=dark"
                alt="Slice (beta) - Decentralized payments infrastructure for everything 🍰 | Product Hunt"
                width={250}
                height={54}
              />
            </a>
          </div>
        </div>
      </div>
    )
  )
}

export default Footer