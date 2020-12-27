import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

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

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const ModalDetail = ({ open, toggle, meal }) => {
    const classes = useStyles();
    return (
        <div>
            <Dialog onClose={toggle} aria-labelledby="customized-dialog-title" open={open} scroll={"body"}>
                <DialogTitle id="customized-dialog-title" onClose={toggle}>
                    {meal.strMeal}
                </DialogTitle>
                <DialogContent dividers>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={meal.strMealThumb}
                            title={meal.strMeal}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5" component="h2">Instructions</Typography>
                            <Typography>{meal.strInstructions}</Typography>
                        </CardContent>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={toggle} color="primary">
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default ModalDetail