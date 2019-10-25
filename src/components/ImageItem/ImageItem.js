import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      maxWidth: 300,
    },
    media: {
      height: 100,
    },
  });;

const ImageItem = ({ item, onSelect}) => {
    const { title, image } = item;
    const classes = useStyles();

    const handleClickOpen = (item) => {
        onSelect(item,'image');
      };

    return (
        <Card className={classes.card} onClick={() => handleClickOpen(item)}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                image={image.thumbnailLink}
                title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h3">
                        {title.length < 25 ? title : `${title.slice(0,25)}...`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default ImageItem;