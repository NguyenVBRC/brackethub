import styles from './TournamentCard.module.css';

export default function TournamentCard() {
    return (
        <div className={styles.cardContainer}>
            <p>Sunday, October 12th, 2024</p>
            <p>Mosh Performance Center</p>
        </div>
    )
}