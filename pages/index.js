// Trigger rebuild

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../public/projects.json";
import Clock from "../components/Clock"; // Import the Clock component
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="text-center py-20">
        {/* Profile Photo with Animation */}
        <motion.img
          src="/images/profile.jpg" // Path to your profile picture
          alt="Autar Acharya"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated Name */}
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Autar Acharya
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="mt-4 text-gray-400 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I’m a passionate Full Stack Developer and AR/VR enthusiast with a focus
          on creating innovative and user-centric solutions. With expertise in
          modern web and mobile technologies, I strive to build applications that
          enhance user experiences and solve real-world problems. Welcome to my
          portfolio!
        </motion.p>

        {/* Real-Time Clock */}
        <Clock />
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My recent Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <motion.h2
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to reach out via email, phone, or my social profiles.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Email */}
          <a
            href="mailto:avataracharya8011@gmail.com"
            className="hover:text-blue-400"
          >
            Email: avataracharya8011@gmail.com
          </a>
          {/* Phone */}
          <a href="tel:+15488838020" className="hover:text-blue-400">
            Phone: +1 548-883-8020
          </a>
        </motion.div>
        {/* Social Media Links */}
        <motion.div
          className="flex justify-center space-x-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/autar-acharya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@abhiminermusic80"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <img src="/images/youtube.png" alt="YouTube" className="w-8 h-8" />
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/abhiminer.acharya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <img src="/images/facebook.png" alt="Facebook" className="w-8 h-8" />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/autaracharya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <img src="/images/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
