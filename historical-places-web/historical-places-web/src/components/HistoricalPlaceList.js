import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleVisited } from '../redux/actions';
import useFetchPlaces from '../hooks/useFetchPlaces';
import { Card, CardContent, CardMedia, Button, Typography, Container } from '@mui/material';

const HistoricalPlaceList = () => {
    useFetchPlaces();
    const dispatch = useDispatch();
    const places = useSelector((state) => state.places);
    const sortedPlaces = [...places].sort((a, b) => a.id.localeCompare(b.id));

  return (
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {sortedPlaces.map((place) => (
         <Card
         key={place.id}
         style={{
           maxWidth: 345,
           margin: 16,
           display: 'flex',
           flexDirection: 'column',
           transition: 'transform 0.3s ease, box-shadow 0.3s ease',
           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
           '&:hover': {
             transform: 'scale(1.05)',
             boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
           },
         }}
       >
            <CardMedia
              component="img"
              height="140"
              image={place.image}
              alt={place.name}
              
            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {place.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {place.description}
              </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
              <Button
                variant="contained"
                style={{
                  fontSize: '0.75rem',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#f57c00',
                  },
                }}
                color={place.visited ? 'secondary' : 'primary'}
                onClick={() => dispatch(toggleVisited(place.id))}
              >
                {place.visited ? 'Unmark as Visited' : 'Mark as Visited'}
              </Button>
              <Button
                variant="outlined"
                style={{
                  fontSize: '0.75rem',
                }}
                component={Link}
                to={`/place/${place.id}`}
              >
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default HistoricalPlaceList;
