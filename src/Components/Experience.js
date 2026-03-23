import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaCogs } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Freelance MERN Developer",
      company: "Self-Employed",
      duration: "Present",
      points: [
        "Built full-stack applications from scratch using MongoDB, Express, React, and Node.js.",
        "Designed and implemented secure REST APIs with JWT authentication.",
        "Managed seamless frontend & backend integration for high-performance applications."
      ],
      icon: <FaLaptopCode className="text-4xl text-primary mb-4" />
    }
  ];

  return (
    <section id="experience" className="section relative">
      <h2 className="section-title">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              {exp.icon}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <span className="text-primary font-medium">{exp.company}</span>
              </div>
              <span className="mt-2 md:mt-0 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                {exp.duration}
              </span>
            </div>
            <ul className="space-y-3 text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCogs className="mt-1 flex-shrink-0 text-primary/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
