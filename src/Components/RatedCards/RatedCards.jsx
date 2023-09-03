import React from 'react';
import { Typography, Box } from '@mui/material';

// eslint-disable-next-line import/no-cycle
import { Movie } from '..';
import useStyles from './styles';

function RatedCards({ title, data }) {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
}

export default RatedCards;
