import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import shop1 from "../assets/shop1.png";
import shop2 from "../assets/shop2.png";
import shop3 from "../assets/shop3.png";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % project.images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1500} transitionSpeed={1000} scale={1.02} className="project-tilt-container">
        <div className="project-card glass-effect" style={{ transformStyle: "preserve-3d" }}>
          {/* ===== Image Slider ===== */}
          <div className="slider" style={{ transform: "translateZ(40px)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
            <img src={project.images[current]} alt="Project Screenshot" />
            <button className="slider-btn prev" onClick={prevSlide}>
              <FiChevronLeft />
            </button>
            <button className="slider-btn next" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>

          {/* ===== Project Content ===== */}
          <div className="project-content" style={{ transform: "translateZ(20px)" }}>
            <h3 style={{ transform: "translateZ(10px)" }}>{project.title}</h3>
            <p style={{ transform: "translateZ(10px)" }}>{project.description}</p>
            <div className="tech-stack" style={{ transform: "translateZ(10px)" }}>
              {project.techStack.map((tech, i) => <span key={i}>{tech}</span>)}
            </div>
            <div className="project-buttons" style={{ transform: "translateZ(15px)" }}>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn primary">
                Live Preview <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const allProjects = [
    {
      id: 1,
      title: "ShopNix E-commerce Ecosystem",
      category: "MERN",
      description: "A professional-grade full-stack platform engineered for scalability. Features a robust REST API architecture, secure JWT-based authentication, dynamic cart management, and a highly responsive storefront for the ultimate shopping experience.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
      link: "https://shopnix-client.vercel.app",
      images: [shop1, shop2, shop3]
    },
    {
      id: 2,
      title: "Admin Analytics Dashboard",
      category: "UI",
      description: "A comprehensive analytics dashboard featuring complex data visualizations, seamless responsive breakpoints, and a pixel-perfect UI converted directly from Figma designs.",
      techStack: ["React.js", "Tailwind CSS", "Recharts", "Framer Motion"],
      link: "#",
      images: [shop2, shop3, shop1] // Reusing existing preview images for placeholder
    },
    {
      id: 3,
      title: "Secure Auth API Microservice",
      category: "API",
      description: "High-performance backend service focusing strictly on security. Features comprehensive role-based access control (RBAC), fast response times, and heavily structured REST routes.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
      link: "#",
      images: [shop3, shop1, shop2]
    }
  ];

  const filters = ["All", "MERN", "API", "UI"];
  
  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section relative">
      {/* Decorative background effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl z-0 pointer-events-none"></div>

      <h2 className="section-title relative z-10">Portfolio Projects</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === filter 
                ? "bg-primary text-gray-900 shadow-[0_0_15px_rgba(0,255,136,0.4)]" 
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid relative z-10">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projects;