import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPlaces } from '../redux/actions';

const useFetchPlaces = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch('http://localhost:5000/places');
        const data = await response.json();
        dispatch(setPlaces(data));
      } catch (error) {
        console.error('Failed to fetch places:', error);
      }
    };

    fetchPlaces();
  }, [dispatch]);
};

export default useFetchPlaces;
