export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // Example of displaying an error:
        // return { isError: true, message: 'Could not fetch events.' };
        throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
            status: 500
        });
    } else {
        return response;
    }
}