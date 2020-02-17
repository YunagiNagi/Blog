import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

const detailCardProps = {
  title: "BlogName",
  detail: "blog detail"
};

export default function DetailCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          { detailCardProps.title }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          { detailCardProps.detail }
        </Typography>
      </CardContent>
    </Card>
  );
}
