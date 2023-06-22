import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { searchMovie } from "../../features/currentGenreOrCategry";
import useStyles from './styles';

export default function Search() {
    const [query, setQuery] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            dispatch(searchMovie(query));
        }
    }
    return (
        <div className={classes.searchContainer}>
            <TextField
                onKeyPress={handleKeyPress}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                variant='standard'
                InputProps={{
                    className: classes.input,
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
        </div>
    );
}

