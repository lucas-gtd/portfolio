import styles from "./project-card.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.container}>
      <img src={project.imageUrl} width={64} height={64} alt="logo" />
      <div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
