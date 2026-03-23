import { HiBriefcase, HiLightningBolt } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <motion.div 
          className="glass-effect p-8 md:p-12 rounded-3xl border border-primary/20 mb-10 max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          
          <p className="about-text text-center md:text-lg mx-auto leading-relaxed">
            I'm a passionate full-stack developer with professional internship 
            experience at <strong className="highlight">Ypsilon IT Solutions Pvt. Ltd.</strong> 
            I specialize in building scalable web ecosystems using the <strong className="highlight">MERN stack</strong>.
            Whether it's creating complex admin panels, interactive dashboards, or robust REST APIs, 
            I maintain a <strong className="highlight">problem-solving mindset</strong> to deliver 
            high-performance applications with flawless UI/UX.
          </p>
        </motion.div>

        <motion.div 
          className="about-highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1000} scale={1.05}>
              <div className="highlight-card" style={{ transformStyle: "preserve-3d" }}>
                <h3 style={{ transform: "translateZ(30px)" }}><HiBriefcase /> Professional</h3>
                <p style={{ transform: "translateZ(20px)" }}>6 months of intensive industry experience in building and shipping code for production.</p>
              </div>
            </Tilt>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1000} scale={1.05}>
              <div className="highlight-card" style={{ transformStyle: "preserve-3d" }}>
                <h3 style={{ transform: "translateZ(30px)" }}><FaRocket /> Scalable</h3>
                <p style={{ transform: "translateZ(20px)" }}>Expertise in developing & deploying large-scale platforms like the ShopNix e-commerce site.</p>
              </div>
            </Tilt>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1000} scale={1.05}>
              <div className="highlight-card" style={{ transformStyle: "preserve-3d" }}>
                <h3 style={{ transform: "translateZ(30px)" }}><HiLightningBolt /> Performance</h3>
                <p style={{ transform: "translateZ(20px)" }}>Passionate about REST APIs, JWT security, and high-performance backend architecture.</p>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;