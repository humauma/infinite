import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RecipeCard from './RecipeCard'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ComponentStyles } from './Style'
import axios from 'axios'

export default function ByCountry() {
    const classes = ComponentStyles();
    const [meals, setMeals] = React.useState([]);
    const [categoryList, setCategoryList] = React.useState([]);
    const [category, setCategory] = React.useState('');
    const [cek, setCek] = React.useState(false);

    //Open api using https://www.themealdb.com/api.php
    React.useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then(response => {
                setCategoryList(response.data.meals);
                console.log(response.data.meals);
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    React.useEffect(() => {
        const updateData = (category) => {
            axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)
                .then(response => {
                    setMeals(response.data.meals);
                    console.log(response.data.meals);
                })
                .catch((error) => {
                    console.error(error)
                })
            setCek(false)
        }
        if (cek) {
            updateData(category);
        }
    }, [cek]);



    const handleChange = (event) => {
        setCategory(event.target.value);
        setCek(true)
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Recipes
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Choose recipes by it's category
                        </Typography>
                        <div className={classes.heroButtons}>
                            <FormControl className={classes.formControl}>
                                <InputLabel >Category</InputLabel>
                                <Select
                                    native
                                    value={category}
                                    onChange={handleChange}
                                >
                                    <option aria-label="None" value="" />
                                    {categoryList.map((categories) => (
                                        <option key={categories.strCategory} value={categories.strCategory}>{categories.strCategory}</option>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {meals ?
                            (meals.map((meal) => (
                                <RecipeCard key={meal.idMeal} meal={meal} full={false} />
                            )))
                            : ""}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
