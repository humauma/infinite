import * as React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ModalDetail from './ModalDetail'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const RecipeCard = ({ meal }) => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const toggleModal = () => {
        setOpen(!open);
    }
    return (
        <>
            <ModalDetail toggle={toggleModal} open={open} meal={meal} />
            <Grid item key={meal.idMeal} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={meal.strMealThumb}
                        title={meal.strMeal}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {meal.strMeal}
                        </Typography>
                        <Typography component="h6">
                            {meal.strArea}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => setOpen(true)}>View</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};
export default RecipeCard;
