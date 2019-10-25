import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { withStyles } from '@material-ui/styles';

import ResultList from '../ResultList/ResultList';
import SearchBar from '../../components/SearchBar/SearchBar';
import SimpleDialog from './../../components/Modal/Modal';

const styles = theme => ({
    button: {
        margin: "auto",
        justifySelf: 'center'
    },
    grid: {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    panelContent: {
        height: '75vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingRight: '10px',
        margin: '0'
    }
  });
class TabContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            item: {},
            type: '',
            term: ''
        }
    }

    handleClose = value => {
        this.setState({
            open: false
        })
    };

    handleSelect = (value,type) => {
        this.setState({
            open: true,
            type: type,
            item: {
                dialog: value
            }
        })
    }
    
    render(){
        const {classes} = this.props;
        const {videos, images} = this.props.data;
        return(
            <div >  
                <Grid container>
                    <Grid item xs={9}> 
                        <SearchBar onFormSubmit={this.props.onFormSubmit} />
                    </Grid>
                    <Grid item xs={3} className={classes.grid}>
                        <Grid container className={classes.grid}>
                            <Grid item xs={6} className={classes.grid}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<DeleteIcon />}
                                    onClick={this.props.onClose}
                                >
                                    Close
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className={classes.panelContent}>
                    <Grid item xs={9}>
                        <Grid container spacing={3}>
                            <Grid key='video-colum' item xs={12}><YouTubeIcon/></Grid>
                            <ResultList items={videos} type={'video'} onSelect={this.handleSelect}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={3}>
                            <Grid key='image-colum' item xs={12}><ImageIcon/></Grid>
                            <ResultList items={images} type={'images'} onSelect={this.handleSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
                <SimpleDialog open={this.state.open} onClose={this.handleClose} data={this.state.item} type={this.state.type}/>
            </div>
        )
    }
}

export default withStyles(styles)(TabContent);