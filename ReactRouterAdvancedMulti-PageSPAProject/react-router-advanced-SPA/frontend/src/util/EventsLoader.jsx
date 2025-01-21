export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // ...
    } else {
        return response;
    }
}
