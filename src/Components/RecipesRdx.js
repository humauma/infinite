import * as React from 'react';
import {recipeAction} from '../Redux/actions';
import {connect} from 'react-redux';
import { Container, CssBaseline, Grid, Typography } from '@material-ui/core';
import RecipeCard from './RecipeCard'
import propTypes from 'prop-types'
import { ComponentStyles } from './Style'

const Recipes =({meals, getCek, loading})=> {
  const classes = ComponentStyles();
  console.log(meals)
  React.useEffect(()=>{
    if (loading) {
      getCek()
}
  }, [loading])

  console.log(loading)
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
                  <RecipeCard key={meal.idMeal} meal={meal} full={true} />
                ))}
              </Grid>
            </Container>
          </main>
        </React.Fragment>
      );

    
}

const mapStateToProps = state => ({
    ...state.recipeReducer
})

const mapDisppatchToProps = {
    getCek: recipeAction.getData,
    
}

Recipes.propTypes = {
    meals: propTypes.object,
    dataStates: propTypes.object,
    loading: propTypes.bool,
    getData: propTypes.func,
}

export default connect(mapStateToProps, mapDisppatchToProps)(Recipes)