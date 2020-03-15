import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProfileCard from '../Profile/Profile';
import PostCard from '../Post/Post';
import PaginationButtons from '../Pagination/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginRight: theme.spacing(0.5),
  },
}));

export default function Contents() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={1}>
        </Grid>
        <Grid item sm={12} md={7}>
          <PostCard />
          <PaginationButtons />
        </Grid>
        <Grid item sm={12} md={3}>
          <ProfileCard />
        </Grid>
        <Grid item md={1}>
        </Grid>
      </Grid>
    </div>
  );
}
