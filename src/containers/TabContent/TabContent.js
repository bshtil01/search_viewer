import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../../components/SearchBar/SearchBar';
import ResultList from '../ResultList/ResultList';
import SimpleDialog from './../../components/Modal/Modal';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    grid: {
        justifyContent: 'center',
        display: 'flex'
    },
    panelContent: {
        // height: '80vh',
        // overflow: 'scroll',
        // paddingRight: '15px'
    }
  }));
const TabContent = props => {
    const [open, setOpen] = React.useState(false);
    const [item, setItem] = React.useState(false);
    const [type, setType] = React.useState(false);
    // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const {videos, images} = props.data;
    const classes = useStyles();

    
    const handleClose = value => {
        setOpen(false);
    };

    const handleSelect = (value,type) => {
        setOpen(true);
        setItem({
            dialog: value
        })
        setType(type)
    }

    return(
        <div className={classes.panelContent}>  
            <Grid container spacing={3}>
                <Grid item xs={9}> 
                    <SearchBar onFormSubmit={props.onFormSubmit} />
                </Grid>
                <Grid item xs={3} className={classes.grid}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={props.onClose}
                    >
                        Close
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Grid container spacing={3}>
                        {/* TODO on select to enlarge */}
                        <Grid key='video-colum' item xs={12}>Videos</Grid>
                        <ResultList items={videos} type={'video'} onSelect={handleSelect}/>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container spacing={3}>
                        <Grid key='image-colum' item xs={12}>images</Grid>
                        <ResultList items={images} type={'images'} onSelect={handleSelect}/>
                    </Grid>
                </Grid>
            </Grid>
            <SimpleDialog open={open} onClose={handleClose} data={item} type={type}/>
        </div>
    )
}

export default TabContent;