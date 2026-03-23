import { FiMail, FiPhone, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function Contact() {
  return (
    <section id="contact" className="section relative">
      <div className="text-center mb-2 mt-[-20px]">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
          Available for freelance work
        </span>
      </div>
      <h2 className="section-title">Let's Connect</h2>

      <div className="contact-container max-w-5xl mx-auto mt-8">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1000} scale={1.05}>
          <div className="contact-card glass-effect" style={{ transformStyle: "preserve-3d" }}>
            <div className="contact-icon" style={{ transform: "translateZ(30px)" }}>
              <FiMail />
            </div>
            <div className="contact-info" style={{ transform: "translateZ(20px)" }}>
              <h4>Email Me</h4>
              <a href="mailto:rohillaaaditya02@gmail.com">
                rohillaaaditya02@gmail.com
              </a>
            </div>
          </div>
        </Tilt>

        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1000} scale={1.05}>
          <div className="contact-card glass-effect" style={{ transformStyle: "preserve-3d" }}>
            <div className="contact-icon" style={{ transform: "translateZ(30px)" }}>
              <FiPhone />
            </div>
            <div className="contact-info" style={{ transform: "translateZ(20px)" }}>
              <h4>Call Now</h4>
              <a href="tel:+917470502182">+91 7470502182</a>
            </div>
          </div>
        </Tilt>

        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1000} scale={1.05}>
          <div className="contact-card glass-effect" style={{ transformStyle: "preserve-3d" }}>
            <div className="contact-icon" style={{ transform: "translateZ(30px)" }}>
              <FiLinkedin />
            </div>
            <div className="contact-info" style={{ transform: "translateZ(20px)" }}>
              <h4>LinkedIn</h4>
              <a 
                href="https://www.linkedin.com/in/aaditya-rohilla-aadi70502182/" 
                target="_blank" 
                rel="noreferrer"
              >
                View Profile <FiExternalLink />
              </a>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1000} scale={1.05}>
          <div className="contact-card glass-effect" style={{ transformStyle: "preserve-3d" }}>
            <div className="contact-icon bg-green-500/10 text-green-500" style={{ transform: "translateZ(30px)" }}>
              <FaWhatsapp />
            </div>
            <div className="contact-info" style={{ transform: "translateZ(20px)" }}>
              <h4>WhatsApp</h4>
              <a 
                href="https://wa.me/917470502182?text=Hi%20Aaditya!%20I%20would%20like%20to%20discuss%20a%20project." 
                target="_blank" 
                rel="noreferrer"
              >
                Chat with me <FiExternalLink className="inline ml-1" />
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
}

export default Contact;