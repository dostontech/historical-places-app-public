import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Container, Button } from '@mui/material';


const HistoricalPlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = useSelector((state) => 
    state.places.find(p => p.id === id)
  );
  console.log('Place from Redux:', place); // Add this line to debug
console.log('Place ID from URL:', id); // Debug log
  if (!place) {
    return (
      <Container>
        <Typography variant="h6">Place not found</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={place.image}
          alt={place.name}
        />
        <CardContent>
          <Typography variant="h4">{place.name}</Typography>
          <Typography variant="body1">{place.description}</Typography>
          <Typography variant="h6">Status: {place.visited ? 'Visited' : 'Not Visited'}</Typography>
          <Button
            variant="outlined"
            style={{ marginTop: '16px' }}
            onClick={() => navigate('/')}
          >
            Go Back
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default HistoricalPlaceDetails;
