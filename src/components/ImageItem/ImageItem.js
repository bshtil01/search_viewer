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

    return (
        // <div onClick={() => onSelect(item)} className="video-item item">
        //     <img alt={item.title} className="ui image" src={item.image.thumbnailLink} />
        //     <div className="content">
        //         <div className="header">
        //             {item.title}
        //         </div>
        //     </div>
        // </div>

        <Card className={classes.card} onClick={() => onSelect(item)}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                image={image.thumbnailLink}
                title={title}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                    {title.length < 25 ? title : `${title.slice(0,25)}...`}
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                    {description.length < 50 ? title : `${description.slice(0,50)}...`}
                </Typography> */}
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default ImageItem;