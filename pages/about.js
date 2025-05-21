import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Hello! I'm Autar Acharya, a passionate Full Stack Developer and AR/VR enthusiast with 
          years of experience building innovative and user-centric solutions. I specialize in web 
          and mobile development, creating applications that solve real-world problems. My journey 
          includes working on exciting projects that blend technology and creativity to provide 
          seamless user experiences.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mt-4">
          In addition to development, I have a deep love for music, where I explore storytelling 
          and emotional expression through my compositions. This portfolio is not just a showcase 
          of my technical skills but also a reflection of my creative journey. Thank you for stopping 
          by!
        </p>
      </div>
      <Footer />
    </div>
  );
}
