import { useState } from "react";

export default function Player({ name, symbol }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    let userEdit = <span className="player-name">{name}</span>;

    if (isEditing) {
        userEdit = <input type="text" required />;
    }

    return (
        <li>
            <span className="player">
                {userEdit}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    );
}