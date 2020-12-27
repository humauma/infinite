import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RecipeCard from './RecipeCard'
import useStyles from './Style'
import axios from 'axios'

export default function Recipes() {
  const [meals, setMeals] = React.useState([]);
  const classes = useStyles();

  //Open api using https://www.themealdb.com/api.php
  React.useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=s")
      .then(response => {
        setMeals(response.data.meals);
        console.log(response.data.meals);
      })
      .catch((error) => {
        console.error(error)
      })
  }, []);



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
              Aneka macam ide resep masakan dan makanan yang simpel
              tersaji disini untuk memberi panduan dan mempermudah dalam menentukan hidangan lezat untuk
              keluarga anda
            </Typography>
            <div className={classes.heroButtons}>
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
