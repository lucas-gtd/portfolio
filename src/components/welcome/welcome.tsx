import { useNavigate } from "react-router";
import styles from "./welcome.module.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Welcome in my world!</h1>
      <h2>Here you gonna see what programing is.</h2>
      <button
        onClick={() => {
          navigate("/home", { viewTransition: true });
        }}
      >
        Explore {">"}
      </button>
    </div>
  );
}
