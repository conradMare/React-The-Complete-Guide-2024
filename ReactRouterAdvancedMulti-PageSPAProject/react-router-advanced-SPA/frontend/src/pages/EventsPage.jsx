import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();

    // Example of displaying an error:
    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }
    const events = data.events;

    return (
        <EventsList events={events} />
    );
}

export default EventsPage;