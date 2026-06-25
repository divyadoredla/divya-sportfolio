import { ArrowRight, ExternalLink, Github } from "lucide-react";

import pic1 from "../../pic1.png";
import pic2 from "../../pic2.png";
import pic3 from "../../pic3.png";
import pic4 from "../../pic4.png";
import pic5 from "../../pic5.jpg";
import pic6 from "../../pic6.png";
import pic7 from "../../pic7.png";

const projects = [
  {
    id: 6,
    title: "Parks Surveillance & Analytics Platform",
    description: "A comprehensive, end-to-end computer vision platform leveraging YOLO11 to handle custom model training, real-time multi-stream inference, parallel batch processing, and advanced spatial surveillance analytics.",
    image: pic7,
    tags: ["YOLO11", "Computer Vision", "Python", "Streamlit"],
    demoUrl: "https://parks-surveillance-yolo-object-detection-system.streamlit.app",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "AI Vehicle Monitoring System",
    description: "Real-time traffic monitoring web application with auto-hybrid inference, speed estimation, and low-light optimization.",
    image: pic4,
    tags: ["Python", "YOLOv11", "Streamlit", "CLAHE", "SQLite"],
    demoUrl: "https://ai-vehicle-monitoring-app.streamlit.app",
    githubUrl: "https://github.com/divyadoredla/-AI-Vehicle-Monitoring-App#-ai-vehicle-monitoring-system",
  },
  {
    id: 2,
    title: "SnapClass — Face & Voice Attendance System",
    description: "High-security automated attendance platform utilizing multi-modal biometrics to eliminate proxy tracking.",
    image: pic1,
    tags: ["Python", "Streamlit", "Computer Vision", "Biometrics"],
    demoUrl: "https://snapclass-face-voice-attendance.streamlit.app",
    githubUrl: "https://github.com/divyadoredla/SnapClass-Face-VoiceAttendance",
  },
  {
    id: 3,
    title: "Process Automation Dashboard",
    description: "Robust full-stack business automation dashboard designed to track and streamline complex internal operational processes.",
    image: pic3,
    tags: ["Node.js", "Express.js", "REST APIs", "JS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Spotify Genre Classification",
    description: "Complete machine learning pipeline to process large audio feature datasets and accurately classify track genres.",
    image: pic5,
    tags: ["Python", "SVM", "Random Forest", "XGBoost", "PCA"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Recipe Management Web Application",
    description: "Feature-rich recipe application leveraging the MERN Stack to deliver a seamless, responsive, and interactive user experience.",
    image: pic6,
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/divyadoredla/recipe-web",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/divyadoredla"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
