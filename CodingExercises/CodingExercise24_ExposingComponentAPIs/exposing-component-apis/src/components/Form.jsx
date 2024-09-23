export default function Form() {
    return (
        <form>
            <p>
                <label>Name</label>
                <input type="text" />
            </p>

            <p>
                <label>Email</label>
                <input type="email" />
            </p>
            <p id="actions">
                <button>Save</button>
            </p>
        </form>
    );
}
