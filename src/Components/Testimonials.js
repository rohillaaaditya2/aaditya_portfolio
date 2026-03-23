import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Client 1",
      role: "CEO, Tech Startup",
      content: "Aaditya delivered our project before the deadline. His full-stack skills and problem-solving mindset are exceptional.",
      image: "https://ui-avatars.com/api/?name=C+1&background=0D8ABC&color=fff"
    },
    {
      name: "Client 2",
      role: "Product Manager",
      content: "The API he built for our dashboard is incredibly fast. Highly recommended for any MERN stack work.",
      image: "https://ui-avatars.com/api/?name=C+2&background=random"
    },
    {
      name: "Client 3",
      role: "E-commerce Owner",
      content: "He converted our Figma designs to React flawlessly. The UI is pixel-perfect and highly responsive.",
      image: "https://ui-avatars.com/api/?name=C+3&background=random"
    }
  ];

  return (
    <section id="testimonials" className="section relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>

      <h2 className="section-title">Client Feedback</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((test, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-effect p-8 rounded-2xl border border-gray-800 hover:border-primary/30 transition-colors flex flex-col h-full"
          >
            <FaQuoteLeft className="text-primary text-3xl mb-6 opacity-50" />
            <p className="text-gray-300 italic mb-6 flex-grow">"{test.content}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={test.image} 
                alt={test.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="flex flex-col">
                <h4 className="text-white font-bold">{test.name}</h4>
                <div className="flex text-yellow-400 text-xs my-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="text-gray-500 text-sm leading-tight">{test.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
