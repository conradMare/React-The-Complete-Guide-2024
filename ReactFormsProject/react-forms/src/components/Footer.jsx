export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <h4>"The surest sign of wisdom is constant cheerfulness." - Michel de Montaigne</h4>
            <p>Created {year}</p>
        </footer>
    )
}