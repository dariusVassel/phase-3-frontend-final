import React from "react";
import useStyles from './HomeStyles';

import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1>Hello</h1>
        </div>
    )
}

export default Home;