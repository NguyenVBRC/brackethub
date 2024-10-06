import TournamentCard from "@/components/TournamentCard";
import styles from "./page.module.css";

export default function Home() {
  return (
      <div className={styles.homeContainer}>
        <h1>Upcoming Tournament...</h1>
        <TournamentCard />
      </div>
  );
}
