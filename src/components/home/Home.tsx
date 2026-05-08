import type { Project } from "../../models/project";
import ProjectCard from "../project-card/project-card";
import styles from "./home.module.css";

export default function Home() {
  const projects: Project[] = [
    {
      name: "Nutri Count",
      description: "Track food nutriments consomation and exercices benefits.",
      imageUrl: "",
    },
    {
      name: "Captcha images generator",
      description: "Generate sets of X images for captcha frameworks.",
      imageUrl: "",
    },
    {
      name: "INPI MCP server",
      description: "Search for patents in France and Europe with AI agent.",
      imageUrl: "",
    },
    {
      name: "Mon BTP",
      description:
        "Construction site management and tracking application for building tradespeople.",
      imageUrl: "",
    },
    {
      name: "Neuron",
      description: "A custom-tuned neuron for performing addition.",
      imageUrl: "",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>My projects</h1>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
