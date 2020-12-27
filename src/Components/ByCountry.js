import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RecipeCard from './RecipeCard'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './Style'
import axios from 'axios'

export default function ByCountry() {
    const classes = useStyles();
    const [meals, setMeals] = React.useState([]);
    const [countryList, setCountryList] = React.useState([]);
    const [country, setCountry] = React.useState('American');
    const handleChange = async (event) => {
        await setCountry(event.target.value);
        await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + country)
            .then(response => {
                setMeals(response.data.meals);
                console.log(response.data.meals);
            })
            .catch((error) => {
                console.error(error)
            })
    };

    //Open api using https://www.themealdb.com/api.php
    React.useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then(response => {
                setCountryList(response.data.meals);
                console.log(response.data.meals);
            })
            .catch((error) => {
                console.error(error)
            })
    }, [meals,country]);



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
                            Choose recipes by it's origin
            </Typography>
                        <div className={classes.heroButtons}>
                            <FormControl className={classes.formControl}>
                                <InputLabel >Country</InputLabel>
                                <Select
                                    native
                                    value={country}
                                    onChange={handleChange}
                                >
                                    <option aria-label="None" value="" />
                                    {countryList.map((countries) => (
                                        <option key={countries.strArea} value={countries.strArea}>{countries.strArea}</option>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {meals.map((meal) => (
                            <RecipeCard key={meal.idMeal} meal={meal} />
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
