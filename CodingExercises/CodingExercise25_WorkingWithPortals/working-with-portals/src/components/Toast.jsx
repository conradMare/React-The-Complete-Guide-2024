export default function Toast({ message }) {
    return (
        <aside className="toast" data-testid="toast">
            <p>{message}</p>
        </aside>
    );
}
