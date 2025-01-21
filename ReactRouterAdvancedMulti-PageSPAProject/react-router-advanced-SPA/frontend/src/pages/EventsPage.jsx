import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    return (
        <EventsList events={events} />
    );
}

export default EventsPage;