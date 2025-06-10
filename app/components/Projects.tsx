import Image from "next/image";

const ProjectCard = ({
  title,
  description,
  tech,
  liveUrl,
  imageUrl,
}: {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  imageUrl: string;
}) => (
  <div className="mb-8 p-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:shadow-lg group">
    <div className="grid grid-cols-1 sm:grid-cols-8 gap-4 sm:gap-8">
      <div className="sm:col-span-2">
        <a
          href={liveUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block" // Added block to make the anchor tag fill the container
        >
          <Image
            src={imageUrl} // This will correctly resolve to public/images/...
            alt={`${title} project preview`}
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            loading="lazy"
            width="200"
            height="113"
          />
        </a>
      </div>
      <div className="sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold group-hover:text-white transition-colors"
            >
              {title} ↗
            </a>
          ) : (
            <span className="font-bold">{title}</span>
          )}
        </h3>
        <p className="mt-2 text-[rgb(var(--secondary-rgb))] leading-normal">
          {description}
        </p>
        <ul className="mt-3 flex flex-wrap">
          {tech.map((t) => (
            <li key={t} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium leading-5 text-[rgb(var(--foreground-rgb))]">
                {t}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectData = [
    {
      title: "VisionTutor - Multimodal AI Tutoring Platform",
      description:
        "Built an innovative AI-powered tutoring system with real-time screen monitoring, speech interpretation, and multimodal reasoning, featuring a dual-platform architecture integrated with Gemini models for instant feedback.",
      tech: ["WebSockets", "Real-time APIs", "Gemini AI", "React"],
      liveUrl: "https://vision-tutor.vercel.app/",
      // Correct path to image in the public folder
      imageUrl: "/images/vision-tutor.jpg",
    },
    {
      title: "Livestock Image Classification App",
      description:
        "Achieved 96.3% classification accuracy on livestock breed identification using EfficientNet-B2. Deployed on a scalable cloud infrastructure with 99.9% uptime, launched in partnership with the Agriculture Minister in Bidar.",
      tech: ["PyTorch", "React Native", "Google Cloud", "Docker"],
      liveUrl: "https://github.com/SunilGopalCV/hary-bary-react-expo-app-2.0",
      // Correct path to image in the public folder
      imageUrl: "/images/livestock-app.jpg",
    },
    {
      title: "Flavor Finds - Full-Stack Recipe Application",
      description:
        "Increased user engagement by 30% through a responsive and seamless user experience. Implemented enterprise-grade security with JWT, Firebase, and Google OAuth, built on a scalable backend with RESTful APIs.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Firebase"],
      liveUrl: "https://flavorfinds.onrender.com/",
      // Correct path to image in the public folder
      imageUrl: "/images/flavor-finds.png",
    },
  ];

  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 py-0 lg:py-24">
      <h2 className="hidden lg:block text-sm font-bold uppercase tracking-widest text-[rgb(var(--primary-rgb))] mb-8">
        Projects
      </h2>
      <div>
        {projectData.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
