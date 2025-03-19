"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";

export default function LetterAnimation() {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.children;
    gsap.from(letters, {
      opacity: 0,
      duration: 1,
      y: 50,
      ease: "power1.inOut",
      stagger: 0.1,
    });
  }, []);
  return (
    <>
      <h1 className="text-4xl font-bold tittle-regular m-9">
        <span ref={textRef}>
          {["M", "o", "j", "a", " ", "S", "t", "r", "o", "n", "k", "a"].map(
            (letter, index) => (
              <span key={index} className="letters" >{letter}</span>
            )
          )}
        </span>
      </h1>
    </>
  );
}
