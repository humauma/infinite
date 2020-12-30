import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Container from '@material-ui/core/Container';
import { Route } from 'react-router-dom';
//import Recipes from '../Components/Recipes'
import Recipes from '../Components/RecipesRdx'
import ByCountry from '../Components/ByCountry'
import ByCategory from '../Components/ByCategory'
import { LayoutStyles } from './LayoutStyle.js' //harus id import terakhir untuk override style
//import { ComponentStyles } from '../Components/Style'

//Halaman base untuk layout
const Base = ({ match }) => {
    const classes = LayoutStyles();
    const [open, setOpen] = useState(false);
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
                <Container maxWidth="lg" className={classes.container}>
                    <Route path={`${match.url}/recipes`} component={Recipes} />
                    <Route path={`${match.url}/bycountry`} component={ByCountry} />
                    <Route path={`${match.url}/bycategory`} component={ByCategory} />
                    <Footer />
                </Container>
            </main>
        </div>
    )
};

export default Base;
