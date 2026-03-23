import { motion } from "framer-motion";
import { FaCode, FaServer, FaBug, FaReact, FaRocket } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function Services() {
  const services = [
    {
      title: "Full-Stack Web Dev",
      description: "Develop seamless and robust web ecosystems that drive real business growth.",
      icon: <FaCode />
    },
    {
      title: "API Development",
      description: "Build fast & secure APIs that scale flawlessly with your growing user base.",
      icon: <FaServer />
    },
    {
      title: "Bug Fixing & Optimization",
      description: "Diagnose and squash complex bugs to guarantee a frictionless user experience.",
      icon: <FaBug />
    },
    {
      title: "UI to React Conversion",
      description: "Deliver pixel-perfect, highly responsive React interfaces directly from Figma designs.",
      icon: <FaReact />
    },
    {
      title: "Performance & SEO",
      description: "Supercharge your website's load times and search visibility to maximize traffic.",
      icon: <FaRocket />
    }
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1000} scale={1.05} className="h-full">
              <div className="glass-effect p-8 flex flex-col items-center text-center h-full" style={{ transformStyle: "preserve-3d" }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-6 shadow-[0_0_20px_rgba(0,255,136,0.3)]" style={{ transform: "translateZ(30px)" }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ transform: "translateZ(20px)" }}>{service.title}</h3>
                <p className="text-gray-400" style={{ transform: "translateZ(20px)" }}>{service.description}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
