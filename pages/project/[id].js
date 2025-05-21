import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  // Initialize the router to access the dynamic route parameter (id)
  const router = useRouter();

  // State to hold the selected project details
  const [project, setProject] = useState(null);

  // Fetch project details when the router is ready and an id is available
  useEffect(() => {
    if (!router.isReady) return; // Ensure router is fully loaded

    const { id } = router.query; // Extract the project id from the query
    if (!id) return; // Exit if id is not present

    // Fetch project details from the JSON file
    fetch("/projects.json")
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => {
        const selectedProject = data.find((proj) => proj.id === id); // Find the project by id
        setProject(selectedProject || null); // Update state or set null if not found
      })
      .catch((error) => {
        console.error("Error fetching project details:", error); // Log errors if any
      });
  }, [router.isReady, router.query]); // Dependencies: re-run if router state changes

  // Display a loading message while fetching project details
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
          Loading project details...
        </motion.p>
      </div>
    );
  }

  // Render the project details page
  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center py-10">
        <motion.h1 
          className="text-4xl font-bold" 
          animate={{ scale: [0.8, 1] }} 
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h1>
        <p className="mt-4 text-gray-400">{project.description}</p>
      </header>

      {/* Main Content Section */}
      <section className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
        {/* Render the project image if available */}
        {project.image && (
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto rounded-lg mb-4" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        )}
        {/* Display project details */}
        <p>{project.details}</p>
        {/* Render tags if available */}
        {project.tags && project.tags.length > 0 && (
          <div className="mt-4">
            <span className="text-gray-400">Tags: </span>
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 px-2 py-1 rounded text-sm mx-1">{tag}</span>
            ))}
          </div>
        )}
      </section>

      {/* Footer Section */}
      <footer className="w-full max-w-4xl mt-10 text-center border-t border-gray-700 pt-6">
        {/* Render the live project link if available */}
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
            whileHover={{ scale: 1.1 }}
          >
            View Live Project
          </motion.a>
        )}
        {/* Render the GitHub link if available */}
        {project.github && (
          <div className="mt-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:underline"
              whileHover={{ scale: 1.1 }}
            >
              View on GitHub
            </motion.a>
          </div>
        )}
      </footer>
    </motion.div>
  );
}
