import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg hover:shadow-2xl dark:bg-white dark:text-black transition duration-300"
      whileHover={{ scale: 1.05 }} // Subtle hover scaling effect
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring", // Smooth spring effect
        stiffness: 300, // Responsive spring stiffness
        damping: 20, // Controls overshooting
      }}
    >
      {/* Project Title */}
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>

      {/* Project Description */}
      <p className="text-gray-400 dark:text-gray-600 mb-4">{project.description}</p>

      {/* Project Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 dark:bg-gray-300 text-sm px-3 py-1 rounded-full text-white dark:text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Project Image */}
      {project.image && (
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-32 object-cover rounded-lg mt-4" // Set height to h-32 for smaller image
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}


      {/* Link to Project Details Page */}
      <Link
        href={`/project/${project.id}`}
        className="text-blue-400 dark:text-blue-600 hover:underline font-medium"
      >
        View Details
      </Link>
    </motion.div>
  );
}
