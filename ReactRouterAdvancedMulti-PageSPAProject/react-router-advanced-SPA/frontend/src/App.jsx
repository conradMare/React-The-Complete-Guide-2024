import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEventPage';
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from './pages/Root';
import EventsRoots from './pages/EventsRoots';
import { loader as eventsLoader } from './util/EventsLoader';
import ErrorPage from './pages/Error';

const routeValues = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventsRoots />, children: [
          {
            index: true, element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                path: ':eventId',
                element: <EventDetailPage />,
              },
              { path: 'edit', element: <EditEventPage /> },
            ]
          },
          { path: 'new', element: <NewEventPage /> },
        ]
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={routeValues} />
    </div>
  );
}

export default App;
