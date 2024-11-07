export default function Footer() {

    const date = new Date().getFullYear();

    return (
        <h4 style={{ textAlign: 'center' }}>Created {date}</h4>
    );
}