import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    let title, media, description,height,width;
    let component='image';

    if(props.type === 'video' && props.data.dialog){
        title = props.data.dialog.snippet.title ; 
        media = `https://www.youtube.com/embed/${props.data.dialog.id.videoId}`
        description = props.data.dialog.snippet.description
        height = props.data.dialog.snippet.thumbnails.high.height
        height = '600px'
        width = props.data.dialog.snippet.thumbnails.high.width
        component="iframe"
    }
    if(props.type === 'image' && props.data.dialog){
        title = props.data.dialog.title ; 
        media = props.data.dialog.link
        description = props.data.dialog.image.contextLink
        height = props.data.dialog.image.height
        width = props.data.dialog.image.width
        component='img'
    }


    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}  maxWidth='xl' height='' >
        <DialogTitle id="simple-dialog-title">{ title }</DialogTitle>
        <Card >
            <CardActionArea >
            <CardMedia
                component={component}
                alt={title}
                height={height}
                width={width}
                image={media}
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" >
                    {description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </Dialog>
    );
}