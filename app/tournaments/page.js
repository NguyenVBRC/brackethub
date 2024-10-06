import styles from './tournaments.module.css';

export default function Page() {
    const data = {
        tournaments: [
            {
                name: "Rock O' Ween",
                date: "October 31, 2021",
                location: "Mosh Performance Center",
            },
            {
                name: 'Christmas Classic',
                date: "December 25, 2021",
                location: "Mosh Performance Center",
            },
            {
                name: 'Spring Fling',
                date: "March 20, 2022",
                location: "Mosh Performance Center",
            }
        ]
    }

    const allTourneys = data.tournaments.map(tourney => {
        return (
            <div key={tourney.name} className={styles.tourneyCard}>
                <div className={styles.cardHeader}>
                    <h3>{tourney.name}</h3>
                    <p>{tourney.date}</p>
                </div>
                <p>{tourney.location}</p>
            </div>
        )
    })

    return (
        <div className={styles.container}>
            <h1>All Tournaments</h1>
            {allTourneys}
        </div>
    )
}