export default function Workout({ title, description, time, onComplete }) {
    function handleStartWorkout() {
        // Todo: Start timer
    }

    function handleStopWorkout() {
        // Todo: Stop timer
        onComplete();
    }

    return (
        <article className="workout">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{time}</p>
            <p>
                <button onClick={handleStartWorkout}>Start</button>
                <button onClick={handleStopWorkout}>Stop</button>
            </p>
        </article>
    );
}