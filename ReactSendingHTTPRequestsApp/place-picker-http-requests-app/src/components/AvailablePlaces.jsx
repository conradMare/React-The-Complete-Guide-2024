import { useState, useEffect } from 'react';

import Places from './Places.jsx';
import ErrorPage from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  // Todo: Fetch available places from backend API
  const [isFetching, setIsFetching] = useState(false); // Loading State
  const [availablePlaces, setAvailablePlaces] = useState([]); // Data State
  const [error, setError] = useState(); // Error State

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch('http://localhost:3000/placessss');
        const resData = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch places data');
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({ message: error.message || 'Could not fetch message, please try again later' });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="Error occurred" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
