"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function ScrollGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = gsap.utils.toArray(".gallery-img");



    gsap.to(images, {
      xPercent: -100 * (images.length - 1),
       // Przesuwa całą galerię
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true, // Przypina sekcję podczas scrolla
        scrub: 1, // Płynna animacja
        
        end: () => "+=" + containerRef.current.offsetWidth, // Scrollowanie na szerokość galerii
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={containerRef} className="flex w-[400%] h-screen">
        <div className="gallery-img w-screen h-full relative ">
          <Image
            src="/pictures/DSC_0041.jpg"
            alt="Zdjęcie 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="gallery-img w-screen h-full relative photo_container">
          <Image
            src="/pictures/DSC_0006.jpg"
            alt="Zdjęcie 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="gallery-img w-screen h-full relative photo_container">
          <Image
            src="/pictures/DSC_0040.jpg"
            alt="Zdjęcie 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="gallery-img w-screen h-full relative ">
          <Image
            src="/pictures/DSC_0003.jpg"
            alt="Zdjęcie 4"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
