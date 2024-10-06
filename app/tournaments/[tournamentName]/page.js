export default function Page({ params }) {
    const tourneyName = params.tournamentName;

    // Fetch Tournament Data to render to page

    return (
        <div>
            <h1>{tourneyName}</h1>
        </div>
    )
}