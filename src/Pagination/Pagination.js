import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function PaginationButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={1} variant="outlined" shape="rounded" />
    </div>
  );
}
