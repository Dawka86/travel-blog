import Link from "next/link";
import ScrollGallery from "./ScrollTrigger";
import LetterAnimation from "./letterAnimation";
import AnimatedLine from "./lineAnimation";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-gray-500">
      <div className="tittle_container container mx-auto text-center">
        <header>
          <LetterAnimation />
          <div className="q">
            <div className="b">
              <AnimatedLine />
            </div>
            <div className="w">
             
            </div>
          </div>
          <nav className="flex justify-center space-x-4 mt-4 mb-5">
            <Link href="/dashboard">
              <span className="font-bold rounded-lg px-3 py-2 text-white hover:bg-gray-100 hover:text-gray-900">
                Home
              </span>
            </Link>
            <Link href="/team">
              <span className="font-bold rounded-lg px-3 py-2 text-white hover:bg-gray-100 hover:text-gray-900">
                Team
              </span>
            </Link>
            <Link href="/projects">
              <span className="font-bold rounded-lg px-3 py-2 text-white hover:bg-gray-100 hover:text-gray-900">
                Projects
              </span>
            </Link>
            <Link href="/reports">
              <span className="font-bold rounded-lg px-3 py-2 text-white hover:bg-gray-100 hover:text-gray-900">
                Reports
              </span>
            </Link>
          </nav>
        </header>
        <div className="photo_container">
          <ScrollGallery />
        </div>

        <blockquote className="mt-9 mb-9 text-center text-2xl font-semibold text-gray-700 italic">
          “Fotografie to{" "}
          <span className="relative inline-block px-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span className="relative text-white">kęsy czasu</span>
          </span>{" "}
          , które można wziąć do ręki.”
          <figcaption className="mt-3 text-lg font-medium text-gray-500">
            — Angela Carter
          </figcaption>
        </blockquote>
      </div>
    </div>
  );
}
