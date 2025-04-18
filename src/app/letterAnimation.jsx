"use client";

import { useEffect, useRef } from "react";
import CircleAnime from "./CircleAnimation";

import gsap from "gsap";

export default function LetterAnimation() {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.children;
    gsap.fromTo(letters,
        {opacity:0, y:50}, 
        {
      opacity: 1,
      duration: 0.1,
      y: 0,
      ease: "power1.inOut",
      stagger: 0.1,
      immediateRender: true,
    });
  }, []);
  return (
    <>
      <h1 className="text-4xl font-bold tittle-regular m-9">
        <span ref={textRef}>
          {["M", "o", "j", "e", " ", "P", "o", "d", "r", "ó", "ż", "e", <CircleAnime key="circle"/>, "p","l"].map(
            (letter, index) => (
              <span key={index} className="letters">{letter}</span>
            )
          )}
        </span>
      </h1>
    </>
  );
}
