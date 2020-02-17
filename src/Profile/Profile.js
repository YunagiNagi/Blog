import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(0.5),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    width: 151,
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const MediaControlCardProps = {
  name: "Yunagi nagi",
  detail: "Hello!"
}

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.image}
        image="./JGIU3_EZ.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            { MediaControlCardProps.name }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            { MediaControlCardProps.detail }
          </Typography>
        </CardContent>
        <div className={classes.buttons}>
          <CardActions>
            <Button size="small" color="primary">
              Follow
            </Button>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Detail
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}
