// App.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import profilePic from './assets/sr.jpg';
// If using @fontsource method
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/700.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-['Outfit']">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,100,255,0.1),transparent_70%)]"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3 + Math.random() * 0.5
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-3xl mx-auto text-center"
            >
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                className="relative inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full opacity-30 blur-md"></div>
                <img
                  src={profilePic}
                  alt="Siyon Rai"
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-gray-800"
                />
              </motion.div>

              {/* Name & Description */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-6"
              >
                <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                    Siyon Rai
                  </span>
                </h1>
                <p className="text-xl text-blue-500 font-light mb-4 tracking-wide">
                  Hi, I'm Siyon
                </p>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                  Passionate about learning and exploring the web development and cybersecurity domain.
                </p>
              </motion.div>

              {/* Skills Tags */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-2 mt-6"
              >
                {['HTML/CSS', 'JavaScript', 'React', 'Tailwindcss', 'Git/Github', 'Python'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-800 bg-opacity-50 text-gray-300 rounded-full backdrop-blur-sm tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* Project Interest Areas
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-6"
              >
                <h2 className="text-lg text-blue-300 mb-2">Project Interests</h2>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                  Looking to collaborate on beginner-friendly web projects,
                  contribute to open-source initiatives, and build my portfolio
                  with real-world applications.
                </p>
              </motion.div> */}

              {/* Social Links + Download Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-8 flex flex-col items-center"
              >
                <div className="flex gap-5 mb-6">
                  {[
                    { icon: <FaGithub />, url: "https://github.com/siyon000", label: "GitHub" },
                    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/siyon-rai-076919350/", label: "LinkedIn" },
                    { icon: <FaInstagram />, url: "https://www.instagram.com/siyon_rai/", label: "Instagram" },
                    { icon: <FaXTwitter />, url: "https://x.com/siyon77?t=jCuuSlZcw0UEcHjddZORHQ&s=09", label: "X/Twitter" }
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-400 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.2, color: "#60a5fa" }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="SiyonResume.pdf"
                  download="SiyonResume.pdf"
                  className="px-5 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-black transition-all duration-300 flex items-center gap-2 group tracking-wide"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;