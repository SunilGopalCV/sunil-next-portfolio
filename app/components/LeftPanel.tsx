"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Lobster } from "next/font/google";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const lobster = Lobster({ weight: "400" });

type LeftPanelProps = {
  activeSection: string;
};

const LeftPanel = ({ activeSection }: LeftPanelProps) => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stunning Name Animation
      const name = new SplitType("#name", { types: "chars" });
      gsap.from(name.chars, {
        opacity: 0,
        y: 40,
        rotateX: -90,
        stagger: {
          each: 0.04,
          from: "random",
        },
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      // Animate title and paragraph
      gsap.from(["#title", "#subtitle"], {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 1.0,
      });

      // Animate navigation links
      gsap.from(".nav-link", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 1.4,
      });

      // Animate social icons
      gsap.from(".social-icon", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
        delay: 1.8,
      });
    }, component);
    return () => ctx.revert();
  }, []);

  const navLinks = [
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
  ];

  return (
    <header
      ref={component}
      className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24 p-8 lg:px-24"
    >
      <div>
        <h1
          id="name"
          className="text-4xl md:text-6xl font-bold text-[rgb(var(--foreground-rgb))]"
        >
          <span className={lobster.className}>Sunil Gopal C V</span>
        </h1>
        <h2
          id="title"
          className="mt-3 text-lg md:text-xl font-medium text-slate-300"
        >
          Software Engineer
        </h2>
        <p
          id="subtitle"
          className="mt-4 max-w-xs leading-normal text-[rgb(var(--secondary-rgb))]"
        >
          I build exceptional and accessible digital experiences for the web.
        </p>

        <nav className="hidden lg:block mt-12" aria-label="In-page jump links">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-link">
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-center py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[rgb(var(--secondary-rgb))] hover:text-white"
                    }`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px w-8 bg-[rgb(var(--secondary-rgb))] transition-all group-hover:w-16 group-hover:bg-white ${
                        isActive ? "w-16 bg-white" : ""
                      }`}
                    ></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest">
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-6 mt-8">
        <a
          href="https://github.com/SunilGopalCV"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-[rgb(var(--secondary-rgb))] hover:text-white transition-colors duration-300"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/sunil-gopal-c-v"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-[rgb(var(--secondary-rgb))] hover:text-white transition-colors duration-300"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:sunilgopal63@gmail.com"
          className="social-icon text-[rgb(var(--secondary-rgb))] hover:text-white transition-colors duration-300"
        >
          <Mail size={24} />
        </a>
      </div>
    </header>
  );
};

export default LeftPanel;
