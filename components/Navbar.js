import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 dark:bg-white dark:text-gray-900 transition duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Website Logo */}
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/about" className="hover:text-blue-400 dark:hover:text-blue-600">
            About Me
          </Link>

          <Link href="#music-stories" className="hover:text-blue-400 dark:hover:text-blue-600">
            My Music Stories
          </Link>
          <Link href="/blog" className="hover:text-blue-400 dark:hover:text-blue-600">
            Blog
          </Link>
          <a
            href="/Autar-Resume.pdf" // Replace with the actual path to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-600"
          >
            Resume
          </a>

          <Link href="#projects" className="hover:text-blue-400 dark:hover:text-blue-600">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-400 dark:hover:text-blue-600">
            Contact
          </Link>

          <a
            href="https://www.linkedin.com/in/autar-acharya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-600"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/autaracharya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
