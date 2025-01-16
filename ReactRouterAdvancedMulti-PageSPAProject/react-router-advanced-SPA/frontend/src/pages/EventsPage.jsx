import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Some event',
    },
    {
        id: 'e2',
        title: 'Another event',
    }
];

const DUMMY_EVENTS_PARAMS_TEST = [
    {
        id: 't1',
        title: 'This is the first test',
    },
    {
        id: 't2',
        title: 'This is the second test',
    }
];

function EventsPage() {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map((event) =>
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                )}
            </ul>
            <hr />
            <h1>Params Test</h1>
            <ul>
                {DUMMY_EVENTS_PARAMS_TEST.map((params) =>
                    <li key={params.id}>
                        <Link to={params.id}>{params.title}</Link>
                    </li>
                )}
            </ul>
        </>
    );
}

export default EventsPage;