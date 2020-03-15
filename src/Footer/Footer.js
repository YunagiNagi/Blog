import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
    paddingtop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box bgcolor="primary.main" color="primary.contrastText" className={classes.root}>
      <Typography gutterBottom variant="subject" component="subject">
        Copyright
      </Typography>
    </Box>
  );
}
