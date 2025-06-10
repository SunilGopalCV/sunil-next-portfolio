import React from "react";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: true,
});

const About = () => {
  return (
    // py-0 lg:py-24 removes vertical padding on mobile to let the sticky header get closer
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 py-0 lg:py-24">
      <div className="space-y-4 text-[rgb(var(--secondary-rgb))] leading-relaxed text-[1.1rem]">
        <p className={josefin.className}>
          As a passionate Software Engineer, I focus on developing robust
          full-stack applications and have a keen interest in AI and machine
          learning. My experience at{" "}
          <span className="font-semibold text-[rgb(var(--primary-rgb))]">
            HealthyKid
          </span>{" "}
          involved scaling user engagement by 23% and significantly improving
          data accuracy through algorithm optimization.
        </p>
        <p className={josefin.className}>
          I thrive on transforming complex problems into scalable,
          high-performance solutions. My work on projects like the{" "}
          <span className="font-semibold text-[rgb(var(--primary-rgb))]">
            VisionTutor AI platform
          </span>{" "}
          and a high-accuracy{" "}
          <span className="font-semibold text-[rgb(var(--primary-rgb))]">
            Livestock Classification App
          </span>{" "}
          demonstrates my ability to work with modern technologies like React,
          Python, and cloud infrastructure to deliver impactful products.
        </p>
        <p className={josefin.className}>
          I&apos;m a dedicated problem-solver, with over 500+ challenges
          completed on platforms like LeetCode, and am always eager to learn and
          contribute to innovative projects.
        </p>
      </div>
    </section>
  );
};

export default About;
