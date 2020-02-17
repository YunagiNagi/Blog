import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
  },
  card: {
    marginBottom: theme.spacing(2),
  }
}));

function Post(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={ props.post.title }
          image={ props.post.image }
          title={ props.post.title }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.post.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { props.post.detail }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function PostCard() {
  const classes = useStyles();

  const posts = [
    {
      title: 'PostSample',
      detail: 'post detail',
      image: "./JGIU3_EZ.jpg"
    },
    {
      title: 'PostSample2',
      detail: 'post detail',
      image: "./JGIU3_EZ.jpg"
    }
  ];

  const postcards = posts.map(post => 
    <Post post={post} />
  );

  return (
    <div className={classes.root}>
      { postcards }
    </div>
  );
}
