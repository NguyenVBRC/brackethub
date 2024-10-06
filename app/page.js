import TournamentCard from "@/components/TournamentCard";
import styles from "./page.module.css";

export default function Home() {
  return (
      <div className={styles.body}>
          <TournamentCard />
      </div>
  );
}
