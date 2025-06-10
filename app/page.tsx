"use client";

import { useState, useEffect, useRef } from "react";
import LeftPanel from "./components/LeftPanel";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import MobileStickyHeader from "./components/MobileStickyHeader"; // Import the new component

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = [aboutRef, experienceRef, projectsRef];
    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      sections.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16">
      <LeftPanel activeSection={activeSection} />

      {/* Main content area for both mobile and desktop */}
      <main className="lg:col-start-2 p-6 md:p-12 lg:p-0 mr-8">
        {/* The sticky header is rendered here but only appears on mobile via CSS */}
        <MobileStickyHeader activeSection={activeSection} />

        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={experienceRef} id="experience">
          <Experience />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>

        {/* Add some bottom padding to ensure the last item can be fully scrolled into view */}
        <div className="h-48"></div>
      </main>
    </div>
  );
}
