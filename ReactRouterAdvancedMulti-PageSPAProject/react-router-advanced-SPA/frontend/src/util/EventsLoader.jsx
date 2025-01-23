// import { json } from 'react-router-dom;'

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // Example of displaying an error:
        // return { isError: true, message: 'Could not fetch events.' };

        // Longer version of response:
        throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
            status: 500
        });

        // json Utility function (React Router v6 - v7+ use long version):
        // return json({ message: 'Could not fetch events.' }, {
        //     status: 500
        // }
        // );
    } else {
        return response;
    }
}