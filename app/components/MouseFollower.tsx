"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MouseFollower = () => {
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCircle = (e: MouseEvent) => {
      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7, // Slower duration for a smoother, trailing effect
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCircle);

    return () => {
      window.removeEventListener("mousemove", moveCircle);
    };
  }, []);

  return (
    <div
      ref={follower}
      className="hidden lg:block fixed top-0 left-0 w-80 h-80 rounded-full z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 255, 220, 0.15) 0%, rgba(255, 255, 200, 0.05) 40%, rgba(255, 255, 180, 0) 80%)",
        filter: "blur(80px)", // A nice, soft blur
        transform: "translate(-50%, -50%)", // Center the gradient on the cursor
      }}
    />
  );
};

export default MouseFollower;
