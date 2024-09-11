import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
    return (
        <header id="header">
            <img src={investmentCalculatorLogo} alt="Logo showing a money bag" />
            <h1>React Investment Calculator</h1>
        </header>
    );
}