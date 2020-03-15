import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import GradeIcon from '@material-ui/icons/Grade';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
  container: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    width: "100%",
  },
}));

const RecipeReviewCardProps = {
  autherName: 'Yunagi Nagi',
  autherDetail: 'Detail...'
}

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={4} sm={12}>
            <Avatar aria-label="prifile image" className={classes.avatar} alt="Profile image" src="./JGIU3_EZ.jpg">
            </Avatar>
          </Grid>
          <Grid item xs={8} sm={12} className={classes.content}>
            <Typography variant="h5" component="h5">
              { RecipeReviewCardProps.autherName }
              <IconButton aria-label="add to favorites">
                <GradeIcon />
              </IconButton>
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              { RecipeReviewCardProps.autherDetail }
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
