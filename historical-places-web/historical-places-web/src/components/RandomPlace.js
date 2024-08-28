import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Card, CardMedia, CardContent, Typography } from '@mui/material';

const RandomPlace = () => {
    const places = useSelector((state) => state.places);
    const [randomPlace, setRandomPlace] = useState(null);

    const getRandomPlace = () => {
        if (places.length > 0) {
            const randomIndex = Math.floor(Math.random() * places.length);
            return places[randomIndex];
        }
        return null;
    };
    useEffect(() => {
        setRandomPlace(getRandomPlace());
    }, [places]);

    const suggestRandomPlace = () => {
        setRandomPlace(getRandomPlace());
    };

    return (
        <div>
            <Button style={{ width: '100%' }} color="success" variant="contained" onClick={suggestRandomPlace}>
                Suggest a Random Place
            </Button>
            {randomPlace && (
                <Card style={{ marginTop: '16px', marginBottom: '16px', width: '100%' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={randomPlace.image}
                        alt={randomPlace.name}
                    />
                    <CardContent>
                        <Typography variant="h6">{randomPlace.name}</Typography>
                        <Typography variant="body1">{randomPlace.description}</Typography>
                        <Button
                            variant="outlined"
                            color="success"
                          
                              style={{ marginTop: '16px',   fontSize: '0.75rem', marginBottom: '16px', width: '100%' }}
                            component={Link}
                            to={`/place/${randomPlace.id}`}
                        >
                            See Details
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default RandomPlace;
