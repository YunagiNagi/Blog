import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProfileCard from '../Profile/Profile';
import PostCard from '../Post/Post';
import PaginationButtons from '../Pagination/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Contents() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item sm={1}>
        </Grid>
        <Grid item xs={12} sm={7}>
          <PostCard />
          <PaginationButtons />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ProfileCard />
        </Grid>
        <Grid item sm={1}>
        </Grid>
      </Grid>
    </div>
  );
}
