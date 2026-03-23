import profile from "../assets/profile.jpg";
import { FiArrowUpRight, FiMail, FiCheckCircle } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl text-gray-400 font-medium mb-4">
            MERN Stack Developer | Building Scalable & High-Performance Web Apps
          </h3>
          <h1>
            Hi, I'm <span>Aaditya Rohilla</span>
          </h1>
          <p>
            I build fast, scalable, and user-friendly web applications using the MERN stack. I help startups and businesses turn ideas into real products.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 font-medium text-sm md:text-base text-gray-300 mb-8 items-center mt-[-10px]">
            <span className="flex items-center gap-2"><FiCheckCircle className="text-green-500" size={18} /> 5+ Projects Completed</span>
            <span className="flex items-center gap-2"><FiCheckCircle className="text-green-500" size={18} /> Clean Code</span>
            <span className="flex items-center gap-2"><FiCheckCircle className="text-green-500" size={18} /> Fast Delivery</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn secondary">
              Let's Work Together <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tilt
            className="hero-image"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.45}
            glarePosition="all"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img src={profile} alt="Aaditya Rohilla" style={{ transform: "translateZ(30px)" }} />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;