import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(0.5),
  },
  button: {
    width: '100%',
    height: '100%',
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Header Image"
        image="./header.png"
        title="Header Image"
      />
      <CardActions>
        <Grid container spacing={0}>
          <Grid item xs>
            <Button className={classes.button} size="large" color="primary">
              <HomeIcon color="primary" />
              <Typography variant="h6">Home</Typography>
            </Button>
          </Grid>
          <Grid item xs>
            <Button className={classes.button} size="large" color="primary">
              <SearchIcon color="primary" />
              <Typography variant="h6">Search</Typography>
            </Button>
          </Grid>
          <Grid item xs>
            <Button className={classes.button} size="large" color="primary">
              <ImageSearchIcon color="primary" />
              <Typography variant="h6">Images</Typography>
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
