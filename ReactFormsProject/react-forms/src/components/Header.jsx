import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>React Forms</h1>
      <h2 style={{ color: "black" }}>"A sure sign of wisdom is constant cheerfulness." - Michel de Montaigne</h2>
    </header>
  );
}
