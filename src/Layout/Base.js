import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Recipes from '../Components/Recipes'
import LayoutStyles from './LayoutStyle'
import { Route } from 'react-router-dom';

//Halaman base untuk layout
const Base = ({ match }) => {
    const classes = LayoutStyles();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        // console.log("this")
        setOpen(!open);
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header toggleDrawer={toggleDrawer} open={open} />
            <Sidebar toggleDrawer={toggleDrawer} open={open} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Route path={`${match.url}/recipes`} component={Recipes} />
                <Footer />
            </main>
        </div>
    )
};

export default Base;
