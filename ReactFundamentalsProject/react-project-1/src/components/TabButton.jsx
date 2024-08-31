function TabButton({ children, onSelect }) {

    console.log("TAB BUTTON COMPONENT RENDERING");

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

export default TabButton;