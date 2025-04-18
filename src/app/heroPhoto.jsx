"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function HeroPhoto() {
  let tl = gsap.timeline()
  useEffect(() => {
   
      tl.fromTo(".quote", 
        { scale: 0.5, filter: "blur(10px)", },
        { scale: 1.0, filter: "blur(0px)",duration: 2, opacity:1, ease: "power2.out" }

      ) 
      tl.fromTo(
        ".photo",
        { scale: 1.4, filter: "blur(10px)" },
        { scale: 1.0, filter: "blur(0px)", duration: 2, ease: "power2.out" }
      );
  }, []);

  return <div className="photo"></div>;
}