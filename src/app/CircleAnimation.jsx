"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CircleAnime() {
  const tl = useRef(null);

  useEffect(() => {
    const el = tl.current;
    
    gsap.from(el, { duration: 2, y: -200, ease: "bounce.out" });

    gsap.to(el, {
      duration: 0.5,
      scaleY: 0.6,
      scaleX: 1.4,
      ease: "power2.out",
      transformOrigin: "center bottom",
      yoyo: true,
      repeat: 1,
    });
  }, []);

  return <div ref={tl} className="circle"></div>;
}
