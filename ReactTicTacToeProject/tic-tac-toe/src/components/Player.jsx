import { useState } from "react";

export default function Player({ name, symbol }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    let userEdit = <span className="player-name">{name}</span>;
    // let btnCaption = 'Edit';

    if (isEditing) {
        userEdit = <input type="text" required value={name} />;
        // btnCaption = 'Save';
    }


    return (
        <li>
            <span className="player">
                {userEdit}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}