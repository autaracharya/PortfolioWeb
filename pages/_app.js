import "../styles/globals.css"; // Import global styles
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // Check if the system prefers dark mode
  const defaultDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // State to store the theme (default is dark if preferred)
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  // State to ensure theme is applied before rendering
  const [mounted, setMounted] = useState(false);

  // Ensure the theme is applied after mounting
  useEffect(() => {
    setMounted(true);
    document.documentElement.className = theme; // Set the theme class on <html>
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Avoid rendering until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={theme}>
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <button
            onClick={toggleTheme}
            className="bg-gray-700 text-white p-2 rounded"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* Page Content */}
        <Component {...pageProps} />
      </div>
    </>
  );
}
