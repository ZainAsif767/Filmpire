import React from 'react';
import { Divider, List, ListItem, ListItemText, ListItemIcon, Box, CircularProgress, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import { useGetGenresQuery } from '../../services/TMDB';
import useStyles from './styles';

const categoreis = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoCategoreis = [
  { label: 'Comdey', value: 'comdey' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'snimation' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

export default function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  return (
    <div>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categoreis.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => { }} button>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <Link key={name} className={classes.links} to="/">
            <ListItem onClick={() => { }} button>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}
