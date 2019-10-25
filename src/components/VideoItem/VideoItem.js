import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import CustomizedDialogs from './../../components/Modal/Modal';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 150,
    },
  });;

const VideoItem = ({ item, onSelect }) => {
    const { title, description, thumbnails } = item.snippet;
    const classes = useStyles();

    const handleClickOpen = (item) => {
      onSelect(item,'video');
    };

    return (
        <>
        <Card className={classes.card} onClick={() => { handleClickOpen(item) } } >
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={thumbnails.medium.url}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h3">
                        {title.length < 50 ? title : `${title.slice(0,50)}...`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description.length < 50 ? title : `${description.slice(0,50)}...`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    )
};

export default VideoItem;