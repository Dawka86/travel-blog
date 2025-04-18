"use client";
import { useEffect, useRef, useState } from "react";
import Plane from "./plane";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import HomeAnime from "./homeAnime";
import TreeAnime from "./treeAnime";

gsap.registerPlugin(MotionPathPlugin);

export default function AnimatedLine() {
  const pathRef = useRef(null);
  const planeRef = useRef(null);
  const foreignRef = useRef(null);
  const treeRef1 = useRef(null);
  const treeRef2 = useRef(null);
  const [homeCoords, setHomeCoords] = useState({ x: 0, y: 0 });
  const [treeCoords, setTreeCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // animacja linii
    gsap.fromTo(
      path,
      { strokeDasharray: length, strokeDashoffset: length, opacity: 0 },
      {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.out",
        delay: 1,
        opacity: 1,
      }
    );

    // pozycja HomeAnime na ścieżce
    const point = path.getPointAtLength(length * 0.6);
    setHomeCoords({ x: point.x, y: point.y + 10 });
    setTreeCoords({ x: point.x, y: point.y + 10 });

    gsap.to(planeRef.current, {
      motionPath: {
        path: path,
        align: path,
        autoRotate: true,
        alignOrigin: [-0.3, -0.3],
      },
      duration: 4,
      opacity: 1,
      ease: "power1.inOut",
      delay: 1,
    });
  }, []);

  return (
    <div className="relative w-full h-[70px]">
      <div ref={planeRef} className="plane absolute top-0 left-0">
        <Plane />
      </div>

      <svg
        width="100%"
        height="70"
        viewBox="0 0 488 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M1 18.999C227 113 229 -52 487 18.999"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <foreignObject
          ref={treeRef1}
          x={treeCoords.x + 25}
          y={treeCoords.y + 10}
          width="30"
          height="30"
        >
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ opacity: 1, color:"green" }}>
            <TreeAnime />
          </div>
        </foreignObject>
        <foreignObject
          ref={treeRef2}
          x={treeCoords.x + 45}
          y={treeCoords.y - 10}
          width="30"
          height="30"
        >
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ opacity: 1,color:"green" }}>
            <TreeAnime />
          </div>
        </foreignObject>

        <foreignObject
          ref={foreignRef}
          x={homeCoords.x}
          y={homeCoords.y}
          width="30"
          height="30"
        >
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ opacity: 1 }}>
            <HomeAnime />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
