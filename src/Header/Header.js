import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(0.5),
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Header Image"
        // height="140"
        image="./JGIU3_EZ.jpg"
        title="Header Image"
      />
      <CardActions>
        <Button size="small" color="primary">
          Home
        </Button>
        <Button size="small" color="primary">
          History
        </Button>
        <Button size="small" color="primary">
          Popular
        </Button>
        <Button size="small" color="primary">
          Images
        </Button>
        <Button size="small" color="primary">
          Categoly
        </Button>
      </CardActions>
    </Card>
  );
}
