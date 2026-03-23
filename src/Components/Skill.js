import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaCode
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux, SiExpress, SiPostman } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact size={32} color="#61DAFB" /> },
        { name: "HTML5", icon: <FaHtml5 size={32} color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt size={32} color="#1572B6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={32} color="#38B2AC" /> },
        { name: "Redux", icon: <SiRedux size={32} color="#764ABC" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={32} color="#339933" /> },
        { name: "Express.js", icon: <SiExpress size={32} color="#ffffff" /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={32} color="#47A248" /> },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git / GitHub", icon: <FaGithub size={32} color="#ffffff" /> },
        { name: "Postman", icon: <SiPostman size={32} color="#FF6C37" /> },
        { name: "VS Code", icon: <FaCode size={32} color="#007ACC" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="section relative">
      <h2 className="section-title">Technical Stack</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} transitionSpeed={1000} scale={1.02} style={{ height: "100%" }}>
              <div className="glass-effect skill-category-card" style={{ transformStyle: "preserve-3d" }}>
                <h3 className="skill-category-title" style={{ transform: "translateZ(30px)" }}>
                  {category.title}
                </h3>
                <div className="skill-items-grid" style={{ transform: "translateZ(20px)" }}>
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item-card">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;