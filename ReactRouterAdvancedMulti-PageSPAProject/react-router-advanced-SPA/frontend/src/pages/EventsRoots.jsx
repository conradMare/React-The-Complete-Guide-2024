import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

function EventRoots() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>

    );
}

export default EventRoots;