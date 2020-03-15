import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  posts: {
    padding: theme.spacing(1),
  },
  icons: {
    textAlign: 'right',
  }
}));

function Post(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3}>
          <Avatar aria-label="thumnail image" className={classes.avatar} alt={ props.post.title } src={ props.post.image }></Avatar>
        </Grid>
        <Grid item xs={12} sm={9}>
          <div className={classes.posts}>
            <Typography gutterBottom variant="h4" component="h4">
              { props.post.title }
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              { props.post.detail }
            </Typography>
            <div className={classes.icons}>
              <IconButton aria-label="like">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function PostCard() {

  const posts = [
    {
      title: 'PostSample',
      detail: 'post detail',
      image: "./thumnail.png"
    },
    {
      title: 'PostSample2',
      detail: 'post detail',
      image: "./thumnail.png"
    }
  ];

  const postcards = posts.map(post => 
    <Post post={post} />
  );

  return (
    <div>
      { postcards }
    </div>
  );
}
